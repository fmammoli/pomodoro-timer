import { useEffect, useRef } from "react";

// Eternal ticking....
function animationInterval(ms, signal, callback) {
  const start = document.timeline.currentTime;

  function frame(time) {
    if (signal.aborted) return;
    //callback(time, start);
    scheduleFrame(time);
  }

  function scheduleFrame(time) {
    const elapsed = time - start;
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    callback(time, elapsed, roundedElapsed);
    //console.log(roundedElapsed / 1000);
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(start);
}

// Um hook para usar aquela função.
// Seria legal colocar aquela função dentro do react,
// mas não entendi como fazer isso.
// Talvez seja melhor fora, sei la.
const useAnimationFrame = (ms, callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const controller = new AbortController();
    animationInterval(ms, controller.signal, callbackRef.current);
    return () => controller.abort();
  }, [ms]);
};

export default useAnimationFrame;
