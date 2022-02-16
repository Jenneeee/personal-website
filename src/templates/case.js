import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import Case from '../components/case.js'
import { graphql } from "gatsby"


export default function CasePage () {
  const data = graphql`
  query ($slug: String) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
    }
  }
  `;
  const project = data.projectsJson;
  console.log(project)
  // const title = project.title;
  // const description = project.description;

  return (
    <>
      <Seo title="Case" />
      <Header />
      <Case
        // title={title}
        // description={description}
      />
      <Links />
      <Footer />
    </>
  )

}