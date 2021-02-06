import React from 'react';
import Button from '../Button';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faPlus, faStop } from "@fortawesome/free-solid-svg-icons";


const Countdown = () => {
  
  const [ ms, setMs ] = React.useState(25*60*1000);
  const [ timer, setTimer ] = React.useState(null);
  const intervalRef = React.useRef();
  
  function msToMinutesAndSeconds(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  
  React.useEffect( () => {
    //formata em mm:ss
    const formattedTime = msToMinutesAndSeconds(ms);
    setTimer(formattedTime);
  
  }, [ms])
  
  function startTimer() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval( () => {
        setMs((ms) => ms-1000)
      }, 1 * 1000)
    }
  }
   
  function pauseTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = undefined;
  }

  function addOneMin() {
    setMs((ms) => ms + 60000);
  }
  
  function stopTimer() {
    pauseTimer();
    setMs(25*60*1000);
  }

  return (
    <> 

      <h1 style={{ fontSize: '6em', textAlign: 'center'}}>{timer}</h1>

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