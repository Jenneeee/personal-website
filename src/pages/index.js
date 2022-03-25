import React from "react"
import Seo from "../components/seo"
import Line from '../components/line'
import Button from '../components/button'
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import * as styles from './index.module.scss'
import { motion } from 'framer-motion'

export default function Index () {
  return (
  <>
    <Seo title="Multidisciplinary designer and front-end developer" />
    <Header />
    <motion.div 
      initial={{y:30, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{duration: .4}}
      className={styles.wrapper}>
      <div className={styles.intro}>
        <h2 className={styles.introText}>A multidisciplinary Designer & <br className={styles.brDeskktop}/>Front-end Developer <br className={styles.brDeskktop}/>based in Belgium.</h2>
        <Line />
      </div>
    </motion.div>
    <Links />
    <Footer />
  </>)
}
