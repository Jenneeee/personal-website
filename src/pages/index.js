import React from "react"
import Seo from "../components/seo"
import Line from '../components/line'
import Button from '../components/button'
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import * as styles from './index.module.scss'

export default function Index () {
  return (
  <>
    <Seo title="Multidisciplinary designer and front-end developer" />
    <Header />
    <div className={styles.wrapper}>
      <div className={styles.intro}>
        <h2 className={styles.introText}>A multidisciplinary Designer &<br />Front-end Developer<br />based in Belgium.</h2>
        <Line />
      </div>
    </div>
    <Links />
    <Footer />
  </>)
}
