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
  const workingIntervalDuration = 0.5 * 60 * 1000;
  const restIntervalDuration = 5 * 60 * 1000;

  const [transientDuration, setTransientDuration] = useState(
    workingIntervalDuration
  );

  const [
    currentTime,
    isActive,
    done,
    start,
    pause,
    addOne,
    stop,
    setCountDuration,
  ] = useCount(workingIntervalDuration);

  useEffect(() => {
    console.log("Done!!!: " + done);
  }, [done]);

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
    start();
  }

  function pauseTimer() {
    pause();
  }

  function addOneMin() {
    // setCountDuration((prevDuration) => {
    //   const newDuration = prevDuration + 60 * 1000;
    //   console.log(newDuration);
    //   setTransientDuration(newDuration);
    //   return newDuration;
    // });

    addOne();
  }

  function stopTimer() {
    stop(workingIntervalDuration);
    setTransientDuration(workingIntervalDuration);
  }

  return (
    <>
      <p style={{ margin: "0", color: "tomato", textAlign: "center" }}>
        {/* {workingTime ? "work" : "rest"} */}
      </p>

      <Clock time={msToMinutesAndSeconds(currentTime)} />

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
