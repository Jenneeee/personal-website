import React from 'react';
import { graphql } from 'gatsby';
import Case from '../components/case';
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      caseNumber
      title
      subTitle
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const caseNumber = project.caseNumber
  const title = project.title;
  const description = project.subTitle;

  return (
    <>
      <Seo title={title} />
      <Header />
      <Case
        caseNumber={caseNumber}
        title={title}
        description={description}
      />
      <Links />
      <Footer />
    </>
  );
};

export default ProjectTemplate;