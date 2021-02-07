import React from 'react';
import Countdown from './components/Countdown';
import GitHubCorner from './components/GitHubCorner';
import TimerWrapper from './components/TimerWrapper';
import GlobalStyle from './globalStyle';

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <GitHubCorner projectUrl='https://github.com/heyralfs/pomodoro-timer' />
      <TimerWrapper>
        <Countdown/>
      </TimerWrapper>

    </div>
  );
}

export default App;
