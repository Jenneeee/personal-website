import React from "react"
import * as styles from './line.module.scss'

export default function Footer () {
  const year = new Date().getFullYear();
  return (
  <div className={styles.lineWrapper}>
    <hr className={styles.line} />
    <div className={styles.items}>
      <p>Portfolio 1.0</p>
      <p>hello@jennecattoor.com</p>
      <p>Digital Designer & Developer</p>
      <p>© {year}</p>
    </div>
 </div>)
}