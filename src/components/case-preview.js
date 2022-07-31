import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from './case-preview.module.scss'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

export default function CasePreview({ caseNumber, title, subTitle, slug, coverImage, hover }) {

  function changeBackgroundColor() {
    document.querySelector(':root').style.setProperty('--colorBackground', hover);
  }

  return (
    <section className={styles.wrapper} id="checkHover" key={caseNumber} onMouseOver={changeBackgroundColor}>
      <Link to={slug} state={{ color: hover }}>
        <div className={styles.imageWrapper}><GatsbyImage className={styles.image} image={coverImage} alt={title} /></div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .3 }}
            className={styles.title}>{title}</motion.h3>
          <motion.h4
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .5 }}
            className={styles.subtitle}>{subTitle}</motion.h4>
        </div>
      </Link >
    </section>)
}