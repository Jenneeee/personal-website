import React from "react"
import Arrow from '../icons/arrow'
import { GatsbyImage } from "gatsby-plugin-image"
import '../styles/components/case.scss'

export default function Case ({ caseNumber, title, subTitle, description, client, category, year, tools, links, challenge, approach, result, coverImage, imagesLarge, imagesSmall }) {
  return (
    <div className="case-wrapper">
      <div className="case-top-wrapper">
        <div className="case-left">
          <h5 className="case-number">Case {caseNumber}</h5>
          <GatsbyImage image={coverImage} alt={title}/>
        </div>
        <div className="case-right">
          <h4 className="case-subtitle">{subTitle}</h4>
          <h2 className="case-title">{title}</h2>
          <p className="case-description">{description}</p>
          <div className="case-info">
            <div className="case-info-item">
              <h3>Client</h3>
              <p>{client}</p>
            </div>
            <div className="case-info-item">
              <h3>Category</h3>
              <p>{category}</p>
            </div>
            <div className="case-info-item">
              <h3>Year</h3>
              <p>{year}</p>
            </div>
          </div>
          <div className="case-tools">
            <h3>Tools used</h3>
            <p>{tools}</p>
          </div>
          <div className="case-links">
            {links.map((link, index) => <a key={index} href={link.url} target="_blank" rel="noreferrer" className="button case-link"><div className="button-arrow"><Arrow /></div><span className="button-text">{link.name}</span></a>)}
          </div>
        </div>
      </div>
      <div>{imagesLarge.slice(0,1).map((image, index) => <GatsbyImage key={index} className="case-image" image={image.path.childImageSharp.gatsbyImageData} alt={image.name}/>)}</div>
      <div className="case-text-wrapper">
        <div className="case-text">
          <h4 className="case-text-title">The challenge</h4>
          <p className="case-text-text">{challenge}</p>
        </div>
        <div>{imagesSmall.slice(0,1).map((image, index) => <GatsbyImage key={index} className="case-image" image={image.path.childImageSharp.gatsbyImageData} alt={image.name}/>)}</div>
      </div>
      <div>{imagesLarge.slice(1,2).map((image, index) => <GatsbyImage key={index} className="case-image" image={image.path.childImageSharp.gatsbyImageData} alt={image.name}/>)}</div>
      <div className="case-text-wrapper">
        <div>{imagesSmall.slice(1, 2).map((image, index) => <GatsbyImage key={index} className="case-image" image={image.path.childImageSharp.gatsbyImageData} alt={image.name}/>)}</div>
        <div className="case-text">
          <h4 className="case-text-title">My approach</h4>
          <p className="case-text-text">{approach}</p>
        </div>
      </div>
      <div>{imagesLarge.slice(2,3).map((image, index) => <GatsbyImage key={index} className="case-image" image={image.path.childImageSharp.gatsbyImageData} alt={image.name}/>)}</div>
      <div className="case-text-wrapper">
        <div className="case-text">
          <h4 className="case-text-title">The result</h4>
          <p className="case-text-text">{result}</p>
        </div>
        <div>{imagesSmall.slice(2, 3).map((image, index) => <GatsbyImage key={index} className="case-image" image={image.path.childImageSharp.gatsbyImageData} alt={image.name}/>)}</div>
      </div>
    </div>
  )
}