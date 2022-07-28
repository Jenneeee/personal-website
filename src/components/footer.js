import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import * as styles from './footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.socials}>
          <a href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDribbble} aria-label="Dribbble" /><span className={styles.hidden}>Dribbble</span></a>
          <a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} aria-label="GitHub" /><span className={styles.hidden}>GitHub</span></a>
          <a href="https://www.linkedin.com/in/jennecattoor" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} aria-label="LinkedIn" /><span className={styles.hidden}>LinkedIn</span></a>
        </div>
        <p>© {year} Jenne Cattoor</p>
      </div>
    </footer>)
}