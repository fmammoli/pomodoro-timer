import React from 'react';
import Button from '../Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faPlus, faStop } from "@fortawesome/free-solid-svg-icons";


const Countdown = () => {
  
  const [ ms, setMs ] = React.useState(25*60*1000);
  const [ timer, setTimer ] = React.useState(null);

  // flag para saber se já está rodando o timer
  const [ timerActive, setTimerActive ] = React.useState(false);

  // referência para calcular delay
  const initialTime = React.useRef();

  // referencia setTinverval
  const intervalRef = React.useRef();
  

  function msToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
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
      initialTime.current = Date.now();
      intervalRef.current = setInterval ( ()=>{
        const currentTime = Date.now();        
        const accurateDelay = currentTime - initialTime.current;
       
        setMs( ms => ms - accurateDelay);
        updateTimer(ms);

      }, 1000);

      return () => {
        clearInterval(intervalRef.current);
      }
    }

  }, [timerActive, ms])

  
  function startTimer() {
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
    setMs(25*60*1000);
    updateTimer(25*60*1000);
  }

  return (
    <> 
      <p>{ms}</p>

      <p style={{ fontSize: '5em', textAlign: 'center' }}>{timer}</p>

      <div style={{ display: 'flex', justifyContent: 'center'}}>
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