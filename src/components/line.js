import React from "react"
import * as styles from './line.module.scss'

export default function Footer () {
  const year = new Date().getFullYear();
  return (
  <div className={styles.lineWrapper}>
    <hr className={styles.line} />
    <div className={styles.items}>
      <p className={styles.itemScreenLarge}>Portfolio 1.0</p>
      <p>hello@jennecattoor.com</p>
      <p className={styles.itemScreenXLarge}>Digital Designer & Developer</p>
      <p>© {year}</p>
    </div>
 </div>)
}