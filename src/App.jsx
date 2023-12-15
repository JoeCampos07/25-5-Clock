import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Settings from './components/settings'
import Clock from './components/clock'
import { TbClockCode } from "react-icons/tb";

function App() {

  const [session, setSession] = useState(25);
  const [timeBreak, setTimeBreak] = useState(5);

  const increaseNumber = (set, value) => {
    if (value < 59){
      set(value+1)
    }
  };

  const decreaseNumber = (set, value) => {
    if (value > 1){
      set(value-1)
    }
  };

  const resetCount = () => {
    setSession(25)
    setTimeBreak(5)
  }
  
  return (
      <div className='main-container'>
        <div className='title-heading'><TbClockCode className='clock-logo'/><span className='title-span'>25 + 5 Clock</span><TbClockCode className='clock-logo'/></div>
        <Settings increase={increaseNumber} 
                  decrease={decreaseNumber} 
                  values={[session, timeBreak]} 
                  functions={[setSession, setTimeBreak]}/>
        <Clock time={session} tBreak={timeBreak} reset={resetCount}/>
        <div className='signature'>
          <span className='signature-span'>Coded and Designed by</span>
          <span className='signature-span signature-name'>JoeMint</span>
        </div>  

      </div>
  )
}

export default App
