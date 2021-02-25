import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faPlus,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

const ControlButtonsContainer = styled.div`
  width: 100%;
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
`;

const TimerControlButtons = ({ timer, duration }) => {
  function startTimer() {
    timer.start();
  }

  function pauseTimer() {
    timer.pause();
  }

  function addOneMin() {
    timer.addOne();
  }

  function stopTimer() {
    timer.stop(duration);
  }

  return (
    <ControlButtonsContainer>
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
    </ControlButtonsContainer>
  );
};

export default TimerControlButtons;
