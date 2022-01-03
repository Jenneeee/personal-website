import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'
import '../styles/components/footer.scss'

export default function Footer() {
  return (
  <footer className="footer">
    <div className="footer-item">
      <p>Social media</p>
      <div className='socials-footer'>
        <a href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/><span className='hidden'>Instagram</span></a>
        <a href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDribbble} /><span className='hidden'>Dribbble</span></a>
        <a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /><span className='hidden'>GitHub</span></a>
      </div>
    </div>
    <div className="footer-item">
      <p>Email</p>
      <p>jenne@cattoor.net</p>
    </div>
    <div className="footer-item">
      <p>Copyright</p>
      <p>© 2022 Jenne Cattoor</p>
    </div>
 </footer>)
}