import React from 'react'
import './Work.css';
import { TbBrandNodejs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';

const Work = () => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 3.5, type: 'spring' }
  return (
    <div className="works">
       <div className='awesome'>
            <span style={{color: darkMode? 'white': ''}}>Works on all these</span>
            <span>Tech Stack</span>
            <span>Java, JDBC, Spring Boot, MySQL, git, HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB<br />Rest API</span>
            <Link className='Link' spy={true} to='Contact' smooth={true}>
            <button className='button s-button' >Hire Me</button></Link>
        </div>

        {/* right side */}
        <div className="w-right">
          <motion.div 
          initial={{rotate:45}}
          whileInView={{rotate: 0}}
          viewport={{margin: '-40px'}}
          transition={transition}
          className="w-mainCircle">
            <div className="w-secCircle">
            <TbBrandNodejs className='r-icons'/>
            </div>
            <div className="w-secCircle">
            <FaReact  className='r-icons'/>
            </div>
            <div className="w-secCircle">
            <FaJava className='r-icons'/>
            </div>
            <div className="w-secCircle">
            <SiRedux className='r-icons'/>
            </div>
            <div className="w-secCircle">
            <SiMysql className='r-icons'/>
            </div>
          </motion.div>
          {/* background Circles */}
          <div className="w-backcircle blueCircle"></div>
          <div className="w-backcircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Work