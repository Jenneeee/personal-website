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
      client
      category
      year
      tools
      links {
        name
        url
      }
      challenge
      approach
      result
      coverImage {
        childImageSharp {
          gatsbyImageData
        }
      }
      imagesLarge {
        name
        path {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      imagesSmall {
        name
        path {
          childImageSharp {
            gatsbyImageData
          }
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
  const client = project.client;
  const category = project.category;
  const year = project.year;
  const tools = project.tools;
  const links = project.links;
  const challenge = project.challenge;
  const approach = project.approach;
  const result = project.result;
  const coverImage = project.coverImage.childImageSharp.gatsbyImageData;
  const imagesLarge = project.imagesLarge;
  const imagesSmall = project.imagesSmall;

  return (
    <>
      <Seo title={titleShort} />
      <Header />
      <Case
        caseNumber={caseNumber}
        title={title}
        subTitle={subTitle}
        description={description}
        client={client}
        category={category}
        year={year}
        tools={tools}
        links={links}
        challenge={challenge}
        approach={approach}
        result={result}
        coverImage = {coverImage}
        imagesLarge={imagesLarge}
        imagesSmall={imagesSmall}
      />
      <Links />
      <Footer />
    </>
  );
};

export default ProjectTemplate;