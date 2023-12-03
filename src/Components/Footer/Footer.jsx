import React from 'react'
import './footer.css'
import Wave from '../../img/wave.png'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>Shivanshchawand044@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.linkedin.com/in/vicky-chawand-613328216">
                <Linkedin color='white' size= '3rem'/>
              </a>
              <a href="https://leetcode.com/Vicky_Chawand/">
                <Facebook color='white' size= '3rem'/>
              </a>
              <a href="https://github.com/VickyChawand">
              <Github color='white' size= '3rem'/>
              </a>
            </div>
        </div>
    </div>
  )
}

export default Footer