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
      titleShort
      subTitle
      description
      platform
      category
      year
      tools
      links {
        name
        url
      }
      coverImage {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const caseNumber = project.caseNumber;
  const title = project.title;
  const titleShort = project.titleShort
  const subTitle = project.subTitle;
  const description = project.description;
  const platform = project.platform;
  const category = project.category;
  const year = project.year;
  const tools = project.tools;
  const links = project.links;
  const coverImage = project.coverImage.childImageSharp.gatsbyImageData;

  return (
    <>
      <Seo title={titleShort} />
      <Header />
      <Case
        caseNumber={caseNumber}
        title={title}
        subTitle={subTitle}
        description={description}
        platform={platform}
        category={category}
        year={year}
        tools={tools}
        links={links}
        const coverImage = {coverImage}
      />
      <Links />
      <Footer />
    </>
  );
};

export default ProjectTemplate;