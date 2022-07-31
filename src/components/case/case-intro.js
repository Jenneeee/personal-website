import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from './case-intro.module.scss'

export default function CaseIntro({ title, subTitle, color }) {

  return (
    <section>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.subTitle}>{subTitle}</h4>
      </div>
      <div className={styles.info}>
        <div className={styles.infoOverview}>
          <h3 className={styles.infoTitle}>Overview</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a pulvinar lectus, non pretium nisl. Sed orci felis, consequat sed magna ut, laoreet lobortis eros. <br /><br />Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras venenatis tristique egestas. Nunc nisi metus, convallis vitae sagittis eu, iaculis sit amet lorem.</p>
        </div>
        <div className={styles.infoGrid}>
          <div>
            <h3 className={styles.infoSubTitle}>Client</h3>
            <p>School project</p>
          </div>
          <div>
            <h3 className={styles.infoSubTitle}>Team</h3>
            <p>2 Devine students</p>
            <p>2 CMD students</p>
          </div>
          <div>
            <h3 className={styles.infoSubTitle}>Typefaces</h3>
            <p>Inter</p>
            <p>Integral</p>
          </div>
          <div>
            <h3 className={styles.infoSubTitle}>Completed</h3>
            <p>Spring 2022</p>
          </div>
        </div>
      </div>
      {/* <StaticImage src='../../data/images/unspiked/cover-image.jpg' alt="Website of unspiked" /> */}
      <div className={styles.backgroundColor} style={{ backgroundColor: color }}></div>
    </section>)
}