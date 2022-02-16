import React from "react"
import Arrow from '../icons/arrow'
import { GatsbyImage } from "gatsby-plugin-image"
import '../styles/components/case.scss'

export default function Case ({ caseNumber, title, subTitle, description, platform, category, year, tools, links, coverImage }) {
  return (
    <div className="case-wrapper">
      <div className="case-top-wrapper">
        <div className="case-left">
          <h5 className="case-number">Case {caseNumber}</h5>
          <GatsbyImage className="case-image" image={coverImage} alt={title}/>
        </div>
        <div className="case-right">
          <h4 className="case-subtitle">{subTitle}</h4>
          <h2 className="case-title">{title}</h2>
          <p className="case-description">{description}</p>
          <div className="case-info">
            <div className="case-info-item">
              <h3>Platform</h3>
              <p>{platform}</p>
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
    </div>
  )
}