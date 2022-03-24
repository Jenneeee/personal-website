import React from "react"
import { Link } from 'gatsby'
import Arrow from '../icons/arrow'
import * as styles from'./button.module.scss'


export default function Button ({text, to}) {
  return (
  <>
   <Link className={styles.button} to={to}><span className={styles.icon}><Arrow /></span><span className={text}>{text}</span></Link>
  </>)
}