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
      title
      description
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const title = project.title;
  const description = project.description;

  return (
    <>
      <Seo title="Page not found" />
      <Header />
      <Case
        title={title}
        description={description}
      />
      <Links />
      <Footer />
    </>
  );
};

export default ProjectTemplate;