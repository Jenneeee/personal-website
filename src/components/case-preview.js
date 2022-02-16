import React from "react"
import { Link } from 'gatsby'
import Arrow from '../icons/arrow'
import { GatsbyImage } from "gatsby-plugin-image"
import '../styles/components/case-preview.scss'

export default function CasePreview ({ caseNumber, title, subTitle, coverImage, slug }) {
  return (
  <section className="case-preview-wrapper">
    <Link className="case-preview-image" to={`cases/${slug}`}><GatsbyImage image={coverImage} alt={title}/></Link>
    <div className="case-preview-text">
      <h4>{subTitle}</h4>
      <h3 className="case-preview-title">{caseNumber}: {title}</h3>
      <Link className="button" to={`cases/${slug}`}><div className="button-arrow"><Arrow /></div><span className="button-text">View Case</span></Link>
    </div>
  </section>)
}