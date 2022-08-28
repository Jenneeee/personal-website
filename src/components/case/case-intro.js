import React from "react"
import * as styles from './case-intro.module.scss'

export default function CaseIntro({ title, subTitle, color, overview, client, team, typefaces, completed }) {

  return (
    <section>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.subTitle}>{subTitle}</h4>
      </div>
      <div className={styles.info}>
        <div className={styles.infoOverview}>
          <h3 className={styles.infoTitle}>Overview</h3>
          <p>{overview}</p>
        </div>
        <div className={styles.infoGrid}>
          <div>
            <h3 className={styles.infoTitle}>Client</h3>
            <p className={styles.infoText}>{client}</p>
          </div>
          <div>
            <h3 className={styles.infoTitle}>Team</h3>
            <p className={styles.infoText}>{team}</p>
          </div>
          <div>
            <h3 className={styles.infoTitle}>Typefaces</h3>
            <p className={styles.infoText}>{typefaces}</p>
          </div>
          <div>
            <h3 className={styles.infoTitle}>Completed</h3>
            <p className={styles.infoText}>{completed}</p>
          </div>
        </div>
      </div>
      <div className={styles.backgroundColor} style={{ backgroundColor: color }}></div>
    </section>)
}