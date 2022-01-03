import React from "react"
import { Link } from 'gatsby'
import Seo from "../components/seo"
import Header from '../components/header'
import Footer from '../components/footer'
import Arrow from '../icons/arrow'
import Case from '../components/case'
import { graphql, useStaticQuery } from "gatsby"
import '../styles/pages/index.scss'

export default function Home() {
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
    <Seo title="Home" />
    <Header />
    <div className="homeWrapper">
      <h2>A young UI/UX Designer & Front-end developer based in Belgium.</h2>
      <Link className="button" to="/about"><div className="button-arrow"><Arrow /></div><span className="button-text">More about me</span></Link>
      
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const image = project.image.childImageSharp.gatsbyImageData;

        return (
          <Case key={slug} title={title} description={description} slug={slug} image={image} />
        )
      })}
    </div>
    <Footer />
  </div>)
}
