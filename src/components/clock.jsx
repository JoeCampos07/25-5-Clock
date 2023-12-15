import { useState, useRef, useEffect } from 'react';
import '../stylesheets/clock.css'
import Controls from './controls';
import AlarmSound from '../audios/Alarm.mp3'



function Clock({ time, reset, tBreak }) {

  const playAudio = () => {
    const audio = document.getElementById('beep');
    audio.play()
  }

  const [ phase, setPhase ] = useState('Session')

   /* Session information */
  let totalTime =  time * 60;
  let myTime = Math.floor(totalTime / 60)
  let totalSeconds = Math.floor(totalTime % 60)

  const [ minutes, setMinutes ] = useState(25);
  const [ seconds, setSeconds ] = useState(totalSeconds);
  const [ isRuning, setIsRunning ] = useState(null);

  

  useEffect(() => {
    setMinutes(time); // Update minutes when the time prop changes
    setSeconds(0); // Reset seconds
  }, [time]);

  useEffect (() => {
    let interval;
    if (isRuning){
      interval = setInterval(()=> {
        if(seconds > 0 || minutes > 0){
          if (seconds === 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            setSeconds(59);
          } else {
            setSeconds((prevSeconds) => prevSeconds - 1);
          }
        } else {
        
          clearInterval(interval);
          setIsRunning(false);
          playAudio()
         

          setPhase('Break')
          setBreakMinutes(breakTime)
          setBreakSeconds(breakTotalSeconds)
          setBreakIsRunning(true)

        }
      }, 1000)
    }
    return ()=> clearInterval(interval);
  }, [seconds, minutes, isRuning]) 

  const activate = () => {
    if(phase === 'Session') {
      setIsRunning(true);
    }else{
      setBreakIsRunning(true);
    }
  }

  const deactivate = () => {
    if(phase === 'Session') {
      setIsRunning(false);
    }else{
      setBreakIsRunning(false);
    }
  }

  const reset2 = () => {
    setPhase('Session');
    setMinutes(25);
    setSeconds(totalSeconds);
    setBreakMinutes(5);
    setBreakSeconds(breakTotalSeconds);
    setIsRunning(false);
    setBreakIsRunning(false);
    audio.currentTime = 0;

  }

  const handleReset = () => {
    reset()
    reset2()
  }

  /* Break information */
  let breakTotalTime =  tBreak * 60;
  let breakTime = Math.floor(breakTotalTime / 60)
  let breakTotalSeconds = Math.floor(breakTotalTime % 60)

  const [ breakMinutes, setBreakMinutes ] = useState(5);
  const [ breakSeconds, setBreakSeconds ] = useState(breakTotalSeconds);
  const [ breakisRuning, setBreakIsRunning ] = useState(null);

  useEffect(() => {
    setBreakMinutes(tBreak); // Update minutes when the time prop changes
    setBreakSeconds(0); // Reset seconds
  }, [tBreak]);

  useEffect (() => {
    let breakInterval;
    if (breakisRuning){
      breakInterval = setInterval(()=> {
        if( breakSeconds > 0 || breakMinutes > 0){
          if (breakSeconds === 0) {
            setBreakMinutes((prevBreakMinutes) => prevBreakMinutes - 1);
            setBreakSeconds(59);
          } else {
            setBreakSeconds((prevBreakSeconds) => prevBreakSeconds - 1);
          }
        }else{
          clearInterval(breakInterval)
          setBreakIsRunning(false)

          setPhase('Session');
          setMinutes(myTime)
          setSeconds(totalSeconds)
          setIsRunning(true);

        }
      }, 1000)
    }
    return ()=> clearInterval(breakInterval);
  }, [breakSeconds, breakMinutes, breakisRuning]) 


  



  return (
      <div className="clock-box">
        <div className='clock-body'>
          <span className='session-span' id='timer-label'>{phase}</span>
          {phase === 'Session' ? (
            <span className='clockwatch-span' id='time-left'>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</span>
              ) : (
            <span className='clockwatch-span' id='time-left'>{breakMinutes}:{breakSeconds < 10 ? '0' + breakSeconds : breakSeconds}</span>
          )}
        </div>
        <Controls start={activate} pause={deactivate} reset={handleReset} />
        <audio id="beep" src={AlarmSound} />
      </div>

  )
}

export default Clock;