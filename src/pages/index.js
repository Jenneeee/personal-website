import React from "react"
import { Link } from 'gatsby'
import Seo from "../components/seo"
import Header from '../components/header'
import Cases from '../components/cases'
import Links from '../components/links'
import Footer from '../components/footer'
import Arrow from '../icons/arrow'
import { graphql, useStaticQuery } from "gatsby"
import '../styles/pages/index.scss'

export default function Index () {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          image {
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
  <div>
    <Seo title="Multidisciplinary designer and front-end developer" />
    <Header />
    <div className="home-wrapper">
      <div className="home-intro">
        <h2>A young UI/UX Designer & Front-end developer based in Belgium.</h2>
        <Link className="button" to="/about"><div className="button-arrow"><Arrow /></div><span className="button-text">More about me</span></Link>
      </div>
      <div className="selected-cases">
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const image = project.image.childImageSharp.gatsbyImageData;

        return (
          <Cases key={slug} title={title} description={description} slug={slug} image={image} />
        )
      })}</div>
    </div>
    <Links />
    <Footer />
  </div>)
}
