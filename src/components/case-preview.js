import React from "react"
import { Link } from 'gatsby'
import Arrow from '../icons/arrow'
import { GatsbyImage } from "gatsby-plugin-image"
import '../styles/components/case-preview.scss'

export default function CasePreview ({ title, description, image, slug }) {
  return (
  <section className="case-wrapper">
    <GatsbyImage className="case-image" image={image} alt={title}/>
    <div className="case-text">
      <h4>{description}</h4>
      <h3>{title}</h3>
      <Link className="button" to={`cases/${slug}`}><div className="button-arrow"><Arrow /></div><span className="button-text">View Case</span></Link>
    </div>
  </section>)
}