import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import * as styles from './contact.module.scss'
import { motion } from 'framer-motion'

export default function Contact() {

  return (
    <>
      <Seo title="Contact" />
      <Header />
      <div className={styles.wrapper}>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}>
          <h3 className={styles.title}>Get in touch.</h3>
          <p className={styles.text}>I'd love to hear from you! If you'd like to chat about design or development, or if you have a potential project or opportunity in mind, let's talk.</p>
        </motion.div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}
          className={styles.socials}>
          <h4 className={styles.type}>Email</h4>
          <p className={styles.social}><a className={styles.link} href="mailto:hello@jennecattoor.com">hello@jennecattoor.com</a></p>
          <h4 className={styles.type}>Social media</h4>
          <p className={styles.social}><a className={styles.link} href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer">Instagram</a></p>
          <p className={styles.social}><a className={styles.link} href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer">Dribbble</a></p>
          <p className={styles.social}><a className={styles.link} href="https://www.linkedin.com/in/jennecattoor" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p className={styles.social}><a className={styles.link} href="https://github.com/Jenneeee" target="_blank" rel="noreferrer">GitHub</a></p>
        </motion.div>
      </div>
      <Links />
      <Footer />
    </>)
}
