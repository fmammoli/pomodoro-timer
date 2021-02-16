import React, { useEffect, useState, useRef } from "react";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faPlus,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

import useAnimationFrame from "../../Hooks/UseAnimationFrame";
import useCount from "../../Hooks/UseCount";

const Countdown = () => {
  const workingIntervalDuration = 25 * 60 * 1000;
  const restIntervalDuration = 5 * 60 * 1000;

  const [currentTime, isActive, done, start, pause, stop] = useCount(
    workingIntervalDuration
  );

  function msToMinutesAndSeconds(elapsedTime) {
    const ms = workingIntervalDuration - elapsedTime;
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    // to avoid bugs
    if (seconds === 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    return (
      (minutes < 10 ? "0" : "") +
      minutes +
      ":" +
      (seconds < 10 ? "0" : "") +
      seconds
    );
  }

  function startTimer() {
    start();
  }

  function pauseTimer() {
    pause();
  }

  function addOneMin() {
    // setMs((ms) => ms + 60000);
  }

  function stopTimer() {
    stop();
  }

  return (
    <>
      <p style={{ margin: "0", color: "tomato", textAlign: "center" }}>
        {/* {workingTime ? "work" : "rest"} */}
      </p>

      <p style={{ margin: "70px 0", fontSize: "5em", textAlign: "center" }}>
        {msToMinutesAndSeconds(currentTime)}
      </p>

      <div
        style={{ margin: "20px 0", display: "flex", justifyContent: "center" }}
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
