import React from "react"
import Seo from "../components/seo"
import Button from '../components/button'
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import * as styles from '../styles/pages/index.module.scss'

export default function Index () {
  return (
  <>
    <Seo title="Multidisciplinary designer and front-end developer" />
    <Header />
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <h2 className={styles.introText}>A multidisciplinary Designer &<br />Front-end developer<br />based in Belgium.</h2>
        <Button to="/about" text="More about me" />
      </div>
    </div>
    <Links />
    <Footer />
  </>)
}
