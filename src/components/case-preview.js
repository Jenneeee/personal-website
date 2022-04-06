import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from './case-preview.module.scss'
import { Link } from 'gatsby'

export default function CasePreview({ title, subTitle, slug, coverImage }) {
  return (
    <section className={styles.wrapper}>
      <Link to={slug}>
        <div className={styles.imageWrapper}><GatsbyImage className={styles.image} image={coverImage} alt={title} /></div>
        <div>
          <h3 className={styles.title}>{title}</h3>
          <h4 className={styles.subtitle}>{subTitle}</h4>
        </div>
      </Link >
    </section>)
}