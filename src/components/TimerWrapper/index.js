import styled from 'styled-components';

const TimerWrapper = styled.div`
  width: 350px;
  height: 80vh;
  background-color: #1a1a42;
  box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.5);
  /* padding: 20px; */
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    padding: 15px 0;
  }
`;

export default TimerWrapper;