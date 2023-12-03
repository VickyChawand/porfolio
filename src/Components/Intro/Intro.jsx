import React from 'react'
import '../Intro/Intro.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiLeetcode } from "react-icons/si";
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import glassesimoji from '../../img/glassesimoji.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import { Link } from 'react-scroll';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 2, type : 'spring'} 

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white' : ''}}>Hy! I Am</span>
                <span>Vicky Chawand</span>
                <span>Software Developer with high level of experience in web designing and development, producting the Qualtiy work</span>
            </div>
            <Link className='Link' spy={true} to='Contact' smooth={true}>
            <button className="button i-button">
            Hire Me
            </button>
            </Link>
            
            <div className="i-icons">
              <a href="https://github.com/VickyChawand">
              <FaGithub className='intro-icons'/>
              </a>
              <a href="https://www.linkedin.com/in/vicky-chawand-613328216">
              <CiLinkedin className='intro-icons'/>
              </a>
              <a href="https://leetcode.com/Vicky_Chawand/">
              <SiLeetcode className='intro-icons'/>
              </a>
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt="" />
          <img src={Vector2} alt="" />
          <img src={boy} alt="" />
          <motion.img 
          initial={{left:'-15rem'}}
          whileInView={{left: '-11rem'}}
          transition={transition}
          src={glassesimoji} alt="" />
          <motion.div 
          initial={{top: '-4%', left: '74%'}}
          whileInView={{left:'68%'}}
          transition={transition}
          style={{top: '-4%', left: '68%'}}
          className='floating-div'>
            <FloatingDiv image={crown} txt1='Software' txt2='Developer'/>
          </motion.div>
          <motion.div
          initial={{left: '9rem', top : '24.4rem'}}
          whileInView={{left: '0rem'}}
          transition={transition} 
          style={{top: '24.4rem', left: '-1.7rem', transform: 'scale(1.3)'}}
          className='floating-div'>
            <FloatingDiv image={thumbup} txt1='Java Full Stack' txt2='Award'/>
          </motion.div>
          <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
          <div className='blur' style={{background: '#C1F5FF', top: '17rem', width:'21rem', height: '11rem', left:'-9rem'}}></div>
        </div>
    </div>
  )
}

export default Intro