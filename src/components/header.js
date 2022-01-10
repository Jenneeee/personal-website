import React, { useState } from "react"
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/components/header.scss'

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
        
        if (document.body.classList.contains("overflow")) {
            document.body.classList.remove("overflow");
        }
        else {
            document.body.classList.add("overflow")
        }
    }

    const closeMenu = () => {
        document.body.classList.remove("overflow")
        setNavbarOpen(false)
    }

  return (
  <header className='header'>
    <div className="navWrapper">
        <h1><Link className='title' to="/" onClick={() => closeMenu()}>Jenne Cattoor.</Link></h1>

        <button className={`hamburger ${navbarOpen ? ' open' : ''}`} id="hamburger" onClick={handleToggle}>
            <span className='hidden'>Toggle Menu</span>
            <span className='bar bar1'></span>
            <span className='bar bar2'></span>
        </button>
    </div>
    <div className={`menu ${navbarOpen ? 'open' : ''}`}>
        <nav className="navigation">
            <ul className="navList">
                <li className='navlink'><Link to="/" activeClassName="active" onClick={() => closeMenu()}>Cases</Link></li>
                <li className='navlink'><Link to="/about" activeClassName="active" onClick={() => closeMenu()}>About</Link></li>
                <li className='navlink'><Link to="/contact" activeClassName="active" onClick={() => closeMenu()}>Contact</Link></li>
            </ul>
        </nav>
        <div className='socials'>
            <a href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/><span className='hidden'>Instagram</span></a>
            <a href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDribbble} /><span className='hidden'>Dribbble</span></a>
            <a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /><span className='hidden'>GitHub</span></a>
        </div>
    </div>
 </header>)
}