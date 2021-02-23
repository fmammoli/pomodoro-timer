import styled from "styled-components";

const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Rajdhani";
  /* color: #1a1a42; */

  & > div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: tomato;
    border-radius: 3px;
    font-size: 4rem;
    text-align: center;
  }
  & > div span {
    display: block;
    width: 3.2rem;
    flex: 1;
  }
  & > div span:first-child {
    border-right: 1px solid #1a1a42;
  }
  & > div span:last-child {
    border-left: 1px solid #1a1a42;
  }
  & > span {
    font-size: 3rem;
    margin: 0 0.5rem;
    color: tomato;
  }
`;

export function Clock({ time }) {
  const [minutes, seconds] = time;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <ClockWrapper>
      <div>
        <span>{minuteLeft}</span>
        <span>{minuteRight}</span>
      </div>
      <span>:</span>
      <div>
        <span>{secondLeft}</span>
        <span>{secondRight}</span>
      </div>
    </ClockWrapper>
  );
}
