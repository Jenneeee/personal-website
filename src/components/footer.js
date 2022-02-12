import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDribbble, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/components/footer.scss'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
  <footer className="footer">
      <div className='socials-footer'>
        <a href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/><span className='hidden'>Instagram</span></a>
        <a href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDribbble} /><span className='hidden'>Dribbble</span></a>
        <a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /><span className='hidden'>GitHub</span></a>
        <a href="https://www.linkedin.com/in/jennecattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /><span className='hidden'>LinkedIn</span></a>
      </div>
      <p>© { year } Jenne Cattoor</p>
 </footer>)
}