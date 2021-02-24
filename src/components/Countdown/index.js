import React, { useEffect, useState, useRef } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faPlus,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import useCount from "../../hooks/useCount";
import { Clock } from "../Clock";

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

  function startTimer() {
    if (workingTime) {
      workingTimer.start();
    } else {
      restTimer.start();
    }
  }

  function pauseTimer() {
    if (workingTime) {
      workingTimer.pause();
    } else {
      restTimer.pause();
    }
  }

  function addOneMin() {
    if (workingTime) {
      workingTimer.addOne();
    } else {
      restTimer.addOne();
    }
  }

  function stopTimer() {
    if (workingTime) {
      workingTimer.stop(workingIntervalDuration);
    } else {
      restTimer.stop(restIntervalDuration);
    }
    setWorkingTime(true);
    setTransientDuration(workingIntervalDuration);
  }

  return (
    <>
      <p style={{ margin: "0", color: "tomato", textAlign: "center" }}>
        {/* {workingTime ? "work" : "rest"} */}
      </p>

      <Clock
        time={msToMinutesAndSeconds(
          workingTime ? workingTimer.currentTime : restTimer.currentTime
        )}
      />

      <div
        style={{
          width: "100%",
          margin: "20px 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button onClick={startTimer}>
          <FontAwesomeIcon icon={faPlay} />
        </Button>

        <Button onClick={pauseTimer}>
          <FontAwesomeIcon icon={faPause} />
        </Button>

        <Button onClick={addOneMin}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>

        <Button onClick={stopTimer}>
          <FontAwesomeIcon icon={faStop} />
        </Button>
      </div>
    </>
  );
};

export default Countdown;
