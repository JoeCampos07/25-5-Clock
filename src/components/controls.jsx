import { useState } from 'react';
import '../stylesheets/controls.css'
import { FaPlay, FaPause, FaRedoAlt } from "react-icons/fa";

function Controls( {reset, start, pause} ) {

  const [ isDisabled, setIsDisabled] =  useState(false)

  const handlePowerOn = () => {
    start()
    setIsDisabled(true)
  }

  const handlePoweroff = () => {
    pause()
    setIsDisabled(false)
  }


  return (
    <div className='controls-main-box'>
      <span className='activation-buttons'>
        <button className='button-4' id='start_stop'><FaPlay className='activation-icon' onClick={()=> handlePowerOn()} /></button>
        <button className='button-4'><FaPause className='activation-icon' onClick={() => handlePoweroff()} /></button>
        <button className='button-4' disabled={isDisabled} id='reset'><FaRedoAlt className='activation-icon' onClick={()=> reset()} /></button>
      </span>
    </div>
  )
}

export default Controls;