import React from 'react'
import './Experience.css'

const Experience = () => {
  
  return (
    <div  className='experience' id='Experience'>
        <div className="achievement">
            <div className="circle" >8</div>
            <span>Bachelor</span>
            <span>CGPA</span>
        </div>
        <div className="achievement">
            <div className="circle">15+</div>
            <span>Projects</span>
            <span>Compoleted</span>
        </div>
        <div className="achievement">
            <div className="circle">83</div>
            <span>High School</span>
            <span>Percent</span>
        </div>
    </div>
  )
}

export default Experience