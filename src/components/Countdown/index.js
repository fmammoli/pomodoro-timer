import React from 'react';
import Button from '../Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faPlus, faStop } from "@fortawesome/free-solid-svg-icons";


const Countdown = () => {

  const workingIntervalDuration = 25*60*1000;
  const restIntervalDuration = 5*60*1000; 
  
  //const [ ms, setMs ] = React.useState(25*60*1000);
  const [ ms, setMs ] = React.useState(workingIntervalDuration);
  const [ timer, setTimer ] = React.useState(null);

  // flag para saber se já está rodando o timer
  const [ timerActive, setTimerActive ] = React.useState(false); 

  // status: work or rest
  const [ workingTime, setWorkingTime ] = React.useState(true);

  function msToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return (minutes < 10 ? '0' : '' ) + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  function updateTimer(ms) {
    const formattedTime = msToMinutesAndSeconds(ms);
    setTimer(formattedTime);
  }


  React.useEffect( () => {
    updateTimer(ms);
  }, []);
 

  React.useEffect( () => {

    if(timerActive) {
      const initialTime = Date.now();
      const intervalFnc = setInterval ( ()=>{
        const currentTime = Date.now();        
        const accurateDelay = currentTime - initialTime;
       
        setMs( ms => ms - accurateDelay);

        if( ms <= 0) {
          updateTimer(0);
          if( workingTime ) { 
            setMs(restIntervalDuration);
          } else {
            setMs(workingIntervalDuration);
          }
          setTimeout( () => {
            setWorkingTime(!workingTime)
          }, 1000);
          return;
        }
        updateTimer(ms);
        

      }, 1000);

      return () => {
        clearInterval(intervalFnc);
      }
    } else {
      updateTimer(ms);
    }
  }, [timerActive, ms])

  
  function startTimer() {
    if(!timerActive) {
      setMs( ms => ms - 1000 );
      updateTimer(ms);
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
    updateTimer(workingIntervalDuration);
    setWorkingTime(true);
  }

  return (
    <> 

      <p style={{ margin: '0' ,color: 'tomato', textAlign: 'center'}}>
        {workingTime ? 'work' : 'rest'}
      </p>

      <p style={{ margin: '70px 0', fontSize: '5em', textAlign: 'center' }}>
        {timer}
      </p>

      <div style={{ margin: '20px 0', display: 'flex', justifyContent: 'center'}}>
        <Button onClick={startTimer} >
          <FontAwesomeIcon icon={faPlay} />
        </Button>

        <Button onClick={pauseTimer} >
          <FontAwesomeIcon icon={faPause} />
        </Button>
        
        <Button onClick={addOneMin} >
          <FontAwesomeIcon icon={faPlus} />
        </Button>

        <Button onClick={stopTimer} >
          <FontAwesomeIcon icon={faStop} />
        </Button>

      </div>
      
    </>
  )

}

export default Countdown;