import React, { useEffect, useState } from "react";
import useCount from "../../hooks/useCount";
import { Clock } from "../Clock";
import TimerControlButtons from "../TimerControlButtons";

const Countdown = () => {
  const workingIntervalDuration = 3 * 1000;
  const restIntervalDuration = 5 * 1000;

  const [workingTime, setWorkingTime] = useState(true);

  const [transientDuration, setTransientDuration] = useState(
    workingIntervalDuration
  );

  const workingTimer = useCount(workingIntervalDuration);
  const restTimer = useCount(restIntervalDuration);

  useEffect(() => {
    if (workingTimer.done) {
      setTimeout(() => {
        setWorkingTime(false);
        setTransientDuration(restIntervalDuration);
        workingTimer.stop(workingIntervalDuration);
        restTimer.start();
      }, 1000);
    }

    if (restTimer.done) {
      setTimeout(() => {
        setWorkingTime(true);
        setTransientDuration(workingIntervalDuration);
        restTimer.stop(restIntervalDuration);
        workingTimer.start();
      }, 1000);
    }
  }, [workingTimer.done, restTimer.done]);

  function msToMinutesAndSeconds(elapsedTime) {
    const ms = transientDuration - elapsedTime;
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    // to avoid bugs
    if (seconds === 60) {
      minutes = minutes + 1;
      seconds = 0;
    }

    return [minutes, seconds];
  }

  // function startTimer() {
  //   if (workingTime) {
  //     workingTimer.start();
  //   } else {
  //     restTimer.start();
  //   }
  // }

  // function pauseTimer() {
  //   if (workingTime) {
  //     workingTimer.pause();
  //   } else {
  //     restTimer.pause();
  //   }
  // }

  // function addOneMin() {
  //   if (workingTime) {
  //     workingTimer.addOne();
  //   } else {
  //     restTimer.addOne();
  //   }
  // }

  // function stopTimer() {
  //   if (workingTime) {
  //     workingTimer.stop(workingIntervalDuration);
  //   } else {
  //     restTimer.stop(restIntervalDuration);
  //   }
  //   setWorkingTime(true);
  //   setTransientDuration(workingIntervalDuration);
  // }

  return (
    <>
      <p style={{ margin: "0 0 20px", color: "tomato", textAlign: "center" }}>
        {workingTime ? "work" : "rest"}
      </p>

      <Clock
        time={msToMinutesAndSeconds(
          workingTime ? workingTimer.currentTime : restTimer.currentTime
        )}
      />

      <TimerControlButtons
        timer={workingTime ? workingTimer : restTimer}
        workingIntervalDuration={workingIntervalDuration}
        restIntervalDuration={restIntervalDuration}
        workingTime={workingTime}
        setWorkingTime={setWorkingTime}
        setTransientDuration={setTransientDuration}
      />
    </>
  );
};

export default Countdown;
