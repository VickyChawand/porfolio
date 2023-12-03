import React from 'react'
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Cards from '../Cards/Cards';
import Resume from './resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion';


const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const transition = {duration: 1, type: 'spring'}
  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className='awesome2'>
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <p>
            Embarking on an enriching developer journey, I've traversed the realms of code, constantly expanding my skill set and embracing the challenges that come with crafting innovative solutions. From the initial lines of code to the intricate architecture of applications, every challenge met has been a stepping stone in my continuous evolution as a passionate and dedicated developer.
            </p>
            <a href={Resume} download>
            <button className='button s-button'>Download CV
            </button>
            </a>
        </div>

        {/* right side */}
        <div className="cards">
            <motion.div 
            whileInView={{left: '14rem'}}
            initial={{left:  '25%'}}
            transition={transition}
            style={{left: '14rem'}}>
                <Cards
                emoji = {HeartEmoji}
                heading = {'Frontend'}
                detail = {"Html, Css, Bootstrap,  JavaScript, React"}/>
            </motion.div>
            <motion.div 
            whileInView={{left: '-4rem'}}
            initial={{left:  '25%'}}
            transition={transition}
            style={{ top: '12rem', left: '-4rem'}}>
                <Cards
                emoji = {Glasses}
                heading = {'Backend'}
                detail = {"Java, Spring Boot, NodeJS, MongoDB"}
                />
            </motion.div>
            <motion.div 
            whileInView={{left: '14rem'}}
            initial={{left:  '25%'}}
            transition={transition}
            style={{top: '21rem' ,left: '14rem'}}>
                <Cards
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"lorem ispum dumyy text are usually use in section where we need some random text"}/>
            </motion.div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            <div className='blur s-blur' style={{background: '#C1F5FF'}}></div>
        </div>
    </div>
  )
}

export default Services