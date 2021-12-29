import React, { useState } from "react"
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import './header.css'

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    const closeMenu = () => {
        setNavbarOpen(false)
    }

  return (
  <header className='header'>
    <div className="navWrapper">
        <h1><Link className='title' to="/" onClick={() => closeMenu()}>Jenne Cattoor</Link></h1>

        <button className={`hamburger ${navbarOpen ? ' active' : ''}`} id="hamburger" onClick={handleToggle}>
            <span className='hidden'>Toggle Menu</span>
            <span className='bar bar1'></span>
            <span className='bar bar2'></span>
            <span className='bar bar3'></span>
        </button>
    </div>
    <div className={`menu ${navbarOpen ? ' open' : ''}`}>
        <nav>
            <ul className="navigation">
                <li><Link className='navlink' to="/" onClick={() => closeMenu()}>Home</Link></li>
                <li><Link className='navlink' to="/portfolio" onClick={() => closeMenu()}>Portfolio</Link></li>
                <li><Link className='navlink' to="/about" onClick={() => closeMenu()}>About</Link></li>
                <li><Link className='navlink' to="/contact" onClick={() => closeMenu()}>Contact</Link></li>
            </ul>
        </nav>
        <div className='socials'>
            <a href="https://www.instagram.com/jennecattoor"><FontAwesomeIcon icon={faInstagram} size="lg"/><span className='hidden'>Instagram</span></a>
            <a href="https://dribbble.com/Cattoor"><FontAwesomeIcon icon={faDribbble} size="lg"/><span className='hidden'>Dribbble</span></a>
            <a href="https://github.com/Jenneeee"><FontAwesomeIcon icon={faGithub} size="lg"/><span className='hidden'>GitHub</span></a>
        </div>
    </div>
 </header>)
}