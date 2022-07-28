import React, { useState } from "react"
import { Link } from 'gatsby'
import * as styles from './header.module.scss'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
    console.log(navbarOpen)
  }

  return (
    <header className={styles.header}>
      <h1><Link className={styles.name} to='/'>Jenne Cattoor</Link></h1>
      <nav className={styles.navigation}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link to='/' className={styles.navLink} activeClassName={styles.navLinkActive}>Portfolio</Link></li>
          <li className={styles.navItem}><Link to='/about' className={styles.navLink} activeClassName={styles.navLinkActive}>About</Link></li>
          <li className={styles.navItem}><Link to='/contact' className={styles.navLink} activeClassName={styles.navLinkActive}>Contact</Link></li>
        </ul>
      </nav>
      <button className={styles.hamburger} aria-label="Toggle menu" onClick={handleToggle}>
        <span className={styles.hidden}>Toggle Menu</span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>)
}