import '../stylesheets/settings.css'
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function Settings({ increase, decrease, values, functions }) {
  return (
      <div className="main-box">
        <div className="session-length">
          <div className='nametag' id='session-label'><span>Session Length</span></div>
          <div className='timer-tags'>
            <span className='span2' id='session-length'>
              <FaArrowUp className='arrows' onClick={()=>increase(functions[0], values[0])} id='session-increment'/> 
              {values[0]} 
              <FaArrowDown className='arrows' onClick={()=>decrease(functions[0], values[0])} id='session-decrement'/>
            </span>
          </div>
        </div>
        <div className="session-break">
          <div className='nametag' id='break-label'><span>Session Break</span></div>
          <div className='timer-tags'>
            <span className='span2' id='break-length'>
              <FaArrowUp className='arrows' onClick={()=>increase(functions[1], values[1])} id='break-increment'/> 
              {values[1]} 
              <FaArrowDown className='arrows' onClick={()=>decrease(functions[1], values[1])} id='break-decrement'/>
            </span>
          </div>
          </div>
      </div>
  )
}

export default Settings;