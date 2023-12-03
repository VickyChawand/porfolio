import React, {useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from 'react'
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_z4jm1pi', 'template_7rnkpvg', form.current, 'r6-TdlJSJSQ-kHVCl')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form"  id='Contact' style={{color: darkMode? 'white': ''}}>
        <div className="w-left">
            <div className="awesome3">
                <span >Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background: '#ABF1FF94'}}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="text" name='user_email' className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value='Send' className='button c-btn' />
                <span>{done && "Thanks for contacting me!"}</span>
                <div className="blur c-blur1" style={{background: 'var(--purple)'}}>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact