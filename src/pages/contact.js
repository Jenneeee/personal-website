import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import * as styles from './contact.module.scss'

export default function Contact() {

  return (
    <div>
      <Seo title="Contact" />
      <Header />
      <div className={styles.wrapper}>
        <div>
          <h3 className={styles.title}>Get in touch.</h3>
          <p className={styles.text}>I'd love to hear from you! If you'd like to chat about design or development, or if you have a potential project or opportunity in mind, let's talk.</p>
        </div>
        <div className={styles.socials}>
          <h4 className={styles.type}>Email</h4>
          <p className={styles.social}><a className={styles.link} href="mailto:hello@jennecattoor.com">hello@jennecattoor.com</a></p>
          <h4 className={styles.type}>Social media</h4>
          <p className={styles.social}><a className={styles.link} href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer">Instagram</a></p>
          <p className={styles.social}><a className={styles.link} href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer">Dribbble</a></p>
          <p className={styles.social}><a className={styles.link} href="https://www.linkedin.com/in/jennecattoor" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p className={styles.social}><a className={styles.link} href="https://github.com/Jenneeee" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
      </div>
      <Links />
      <Footer />
    </div >)
}
