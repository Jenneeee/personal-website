import React from "react"
import Seo from "../components/seo"
import Line from '../components/line'
import Header from '../components/header'
import CasePreview from '../components/case-preview'
import Links from '../components/links'
import Footer from '../components/footer'
import * as styles from './index.module.scss'
import { motion } from 'framer-motion'
import { graphql, useStaticQuery } from "gatsby"

export default function Index() {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          subTitle
          slug
          hover
          coverImage {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }`);

  const projects = data.allProjectsJson.edges;
  return (
    <>
      <Seo title="Multidisciplinary designer and front-end developer" />
      <Header />
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .4 }}
        className={styles.wrapper}>
        <div className={styles.intro}>
          <h2 className={styles.introText}>A multidisciplinary Designer & <br className={styles.brDesktop} />Front-end Developer <br className={styles.brDesktop} />based in Belgium.</h2>
          <Line />
        </div>
        <div>
          {projects.map(({ node: project }) => {
            const title = project.title;
            const subTitle = project.subTitle;
            const coverImage = project.coverImage.childImageSharp.gatsbyImageData;
            const slug = project.slug;
            const hover = project.hover;

            return (
              <div className={styles.casePreview}>
                <CasePreview title={title} subTitle={subTitle} slug={slug} coverImage={coverImage} hover={hover} />
              </div>
            )
          })}
        </div>
      </motion.div>
      <Links />
      <Footer />
    </>)
}
