import { useState, useEffect } from "react";
import useAnimationFrame from "./UseAnimationFrame";

// A hook for counting
// Usage:
//      import useCount from ""
//      const [currentTime, isActive, done, start, pause, stop] = useCount(60 * 1000);

function useCount(duration) {
  const [countDuration, setCountDuration] = useState(duration);
  // const [time, setTime] = useState(0);
  // const [elapsedTime, setElapsedTime] = useState(0);
  const [roundElapsedTime, setRoundElapsedTime] = useState(0);

  const [startTime, setStartTime] = useState(0);
  const [pausedTime, setPausedTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const [isActive, setActive] = useState(false);

  const [done, setDone] = useState(false);

  function getTimeData(time, elapsed, roundElapsed) {
    // Start is always Zero
    //setStartTime(start);
    // setTime(time);
    // setElapsedTime(elapsed);
    setRoundElapsedTime(roundElapsed);
  }

  const interval = 1000;
  useAnimationFrame(interval, getTimeData);

  useEffect(() => {
    // console.log("Time: " + roundElapsedTime);
    // console.log("Cronometro comecou em: " + startTime);
    // console.log("Cronometro Time atual: " + currentTime);

    if (!isActive) {
      setStartTime(roundElapsedTime);
    } else {
      setCurrentTime(roundElapsedTime - startTime + pausedTime);
    }
    // O mais correto seria colocar o startTime tambem nas dependencias,
    // mas fazendo isso ele roda o useEffect duas vezes, nao entendi pq.
    // Tirando ele também da certo, mas na hora que entra no useEffect
    // ele esta com o valor da renderizacao anterior.
  }, [roundElapsedTime, startTime, pausedTime]);

  useEffect(() => {
    if (isActive) {
      if (currentTime >= countDuration) {
        setDone(true);
        setActive(false);
      }
    }
  }, [currentTime]);

  function start() {
    if (!isActive) {
      setStartTime(roundElapsedTime);
      setActive(true);
    }
  }

  function pause() {
    if (isActive) {
      setStartTime(roundElapsedTime);
      setPausedTime(currentTime);
      setActive(false);
    }
  }
  function stop(newDuration) {
    //setStartTime(roundElapsedTime);
    setPausedTime(0);
    setCurrentTime(0);
    setCountDuration(newDuration);
    setActive(false);
  }
  return [currentTime, isActive, done, start, pause, stop, setCountDuration];
}
export default useCount;
