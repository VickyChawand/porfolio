import React from 'react'
import '../Navbar/navbar.css';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Vicky</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link className='Link' spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                    <li>Home</li>
                    </Link>
                    <Link className='Link' spy={true} to='Services' smooth={true} >
                    <li>Services</li>
                    </Link>
                    <Link className='Link' spy={true} to='Experience' smooth={true} >
                    <li>TeachStack</li>
                    </Link>
                    <Link className='Link' spy={true} to='Portfolio' smooth={true} >
                    <li>Project</li>
                    </Link>
                    <Link className='Link' spy={true} to='Testimonials' smooth={true} >
                    <li>Testimonials</li>
                    </Link>
                </ul>
            </div>

            <Link className='Link' spy={true} to='Contact' smooth={true}>
                <button className="button n-button" >
                    Ping Me
                </button>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar