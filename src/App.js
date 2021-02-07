import React from 'react';
import Countdown from './components/Countdown';
import TimerWrapper from './components/TimerWrapper';
import GlobalStyle from './globalStyle';

function App() {

  console.log('teste');
  
  return (
    <div className="App">
      <GlobalStyle />
      <TimerWrapper>
        <Countdown/>
      </TimerWrapper>

    </div>
  );
}

export default App;
