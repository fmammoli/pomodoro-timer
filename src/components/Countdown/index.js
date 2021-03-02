import React, { useEffect, useState } from "react";
import useCount from "../../hooks/useCount";
import { Clock } from "../Clock";
import TimerControlButtons from "../TimerControlButtons";

import ring from "../../notifications/notification.mp3";

const Countdown = () => {
  const TIMERS = { work: "work", rest: "rest" };
  const workIntervalDuration = 3 * 1000;
  const restIntervalDuration = 5 * 1000;

  const [workTimerTotal, setWorkTimerTotal] = useState(0);
  const [restTimerTotal, setRestTimerTotal] = useState(0);

  const [whichTimer, setWhichTimer] = useState(TIMERS.work);

  //TODO - quando adiciona 1min o acumulador de tempo não percebe isso,
  // ter que ter o total de tempo que passou quando da o done, so
  // nao sei como...talvez mudar o hook.
  // ....................................................................
  // ATUALIZAÇÃO - estou retornando um estado acumulativo do useCount
  // chamado 'extraTimeUsed' e estou utilizando ele pra contar o tempo
  // total de trabalho/descanso. Mas pode ser que não seja a melhor saída...

  const workTimer = useCount(workIntervalDuration);
  const restTimer = useCount(restIntervalDuration);

  React.useEffect(() => {
    Notification.requestPermission();
  }, []);

  function showNotification() {
    //new Audio(ring).play();
  }

  function setTimer(newTimerId) {
    if (newTimerId === TIMERS.work) {
      restTimer.stop(workIntervalDuration);
      setWhichTimer(newTimerId);
    }
    if (newTimerId === TIMERS.rest) {
      workTimer.stop(workIntervalDuration);
      setWhichTimer(newTimerId);
    }
  }

  useEffect(() => {
    if (workTimer.done) {
      setTimeout(() => {
        showNotification();
        workTimer.stop(workIntervalDuration);
        setWorkTimerTotal((prev) => (prev = prev + 1));
        setWhichTimer(TIMERS.rest);
        //Mostrar um popup pra dizer que terminou e perguntar
        //se quer comecar um intervalo ou pular pro proximo trabalho
      }, 1000);
    }

    if (restTimer.done) {
      setTimeout(() => {
        showNotification();
        restTimer.stop(restIntervalDuration);
        setRestTimerTotal((prev) => (prev = prev + 1));
        setWhichTimer(TIMERS.work);
        //Mostrar um popup pra dizer que terminou e perguntar
        //se quer comecar um work ou pular pro proximo intervalo
      }, 1000);
    }
  }, [workTimer.done, restTimer.done]);

  function msToMinutesAndSeconds(elapsedTime) {
    //const ms = transientDuration - elapsedTime;
    const ms = elapsedTime;
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    // to avoid bugs
    if (seconds === 60) {
      minutes = minutes + 1;
      seconds = 0;
    }

    return [minutes, seconds];
  }

  function minutesAndSecondsToString(time) {
    if (time) return `${time[0]}m ${time[1]}s`;
  }

  return (
    <>
      <p style={{ margin: "0 0 20px", color: "tomato", textAlign: "center" }}>
        {`Work Sessions: ${workTimerTotal}, ${minutesAndSecondsToString(
          msToMinutesAndSeconds(
            workIntervalDuration * workTimerTotal +
              workTimer.extraTimeUsed * 60 * 1000
          )
        )}`}
      </p>
      <p style={{ margin: "0 0 20px", color: "tomato", textAlign: "center" }}>
        {`Rest Sessions: ${restTimerTotal}, ${minutesAndSecondsToString(
          msToMinutesAndSeconds(
            restIntervalDuration * restTimerTotal +
              restTimer.extraTimeUsed * 60 * 1000
          )
        )}`}
      </p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() => setTimer(TIMERS.work)}
          style={
            whichTimer === TIMERS.work
              ? {
                  margin: "0 0 20px",
                  color: "white",
                  backgroundColor: "tomato",
                }
              : {
                  margin: "0 0 20px",
                  color: "Tomato",
                }
          }
        >
          Work
        </button>
        <button
          onClick={() => setTimer(TIMERS.rest)}
          style={
            whichTimer === TIMERS.rest
              ? {
                  margin: "0 0 20px",
                  color: "white",
                  backgroundColor: "tomato",
                }
              : {
                  margin: "0 0 20px",
                  color: "Tomato",
                }
          }
        >
          Rest
        </button>
      </div>

      {whichTimer === TIMERS.work && (
        <>
          <Clock
            time={msToMinutesAndSeconds(
              workIntervalDuration - workTimer.currentTime
            )}
          />
          <TimerControlButtons
            timer={workTimer}
            duration={workIntervalDuration}
          ></TimerControlButtons>
        </>
      )}
      {whichTimer === TIMERS.rest && (
        <>
          <Clock
            time={msToMinutesAndSeconds(
              restIntervalDuration - restTimer.currentTime
            )}
          />
          <TimerControlButtons
            timer={restTimer}
            duration={restIntervalDuration}
          ></TimerControlButtons>
        </>
      )}
    </>
  );
};

export default Countdown;
