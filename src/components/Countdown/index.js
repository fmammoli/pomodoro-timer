import React from "react";
import Button from "../Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faPlus,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

const Countdown = () => {
  const workingIntervalDuration = 25 * 60 * 1000;
  const restIntervalDuration = 5 * 60 * 1000;

  const [ms, setMs] = React.useState(workingIntervalDuration);

  // flag para saber se já está rodando o timer
  const [timerActive, setTimerActive] = React.useState(false);

  // status: work or rest
  const [workingTime, setWorkingTime] = React.useState(true);

  function msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms/60000);
    const seconds = ( (ms % 60000) / 1000 ).toFixed(0);
    // to avoid bugs
    if(seconds === 60) {
      minutes = minutes + 1;
      seconds = 0;
    }
    return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
  }

  React.useEffect(() => {
    if (timerActive) {
      const initialTime = Date.now();
      const intervalFnc = setInterval(() => {
        const currentTime = Date.now();
        const accurateDelay = currentTime - initialTime;

        console.log(accurateDelay);

        setMs((ms) => ms - accurateDelay);

        if (ms <= 0) {
          if (workingTime) {
            setMs(restIntervalDuration);
          } else {
            setMs(workingIntervalDuration);
          }
          setTimeout(() => {
            setWorkingTime(!workingTime);
          }, 1000);
          return;
        }
      }, 1000);

      return () => {
        clearInterval(intervalFnc);
      };
    }
  }, [timerActive, ms]);

  function startTimer() {
    if (!timerActive) {
      setMs((ms) => ms - 1000);
    }
    setTimerActive(true);
  }

  function pauseTimer() {
    setTimerActive(false);
  }

  function addOneMin() {
    setMs((ms) => ms + 60000);
  }

  function stopTimer() {
    setTimerActive(false);
    setMs(workingIntervalDuration);
    setWorkingTime(true);
  }

  return (
    <>
      <p style={{ margin: "0", color: "tomato", textAlign: "center" }}>
        {workingTime ? "work" : "rest"}
      </p>

      <p style={{ margin: "70px 0", fontSize: "5em", textAlign: "center" }}>
        {msToMinutesAndSeconds(ms)}
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
