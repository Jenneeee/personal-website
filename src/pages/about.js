import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './about.module.scss'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <div>
      <Seo title="About" />
      <Header />
      <div className={styles.wrapper}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}>
          <h3 className={styles.title}>About me</h3>
          <p className={styles.text}>Hello, I'm Jenne. You can find me in Knokke-Heist, Belgium. I enjoy running, swimming, cycling, skiing, scouting and kitesurfing. I am fascinated by everything that has to do with digital products. I'm currently studying Digital Design & Development in Kortrijk</p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}
          className={styles.image}>
          <StaticImage src="../data/images/Jenne.jpg" alt="Jenne Cattoor" />
        </motion.div>
      </div>
      <Links />
      <Footer />
    </div>)
}
