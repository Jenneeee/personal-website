import React from "react"
import { Link } from 'gatsby'
import * as styles from './links.module.scss'

export default function links() {
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.text}>Quick links</h4>
      <ul className={styles.list}>
        <li className={styles.item}><Link to="/" className={styles.link} activeClassName={styles.linkActive}>Portfolio</Link></li>
        <li className={styles.item}><Link to="/about" className={styles.link} activeClassName={styles.linkActive}>About</Link></li>
        <li className={styles.item}><Link to="/contact" className={styles.link} activeClassName={styles.linkActive}>Contact</Link></li>
      </ul>
    </section>)
}