import React from "react"
import { Link } from 'gatsby'
import Arrow from '../icons/arrow'
import { GatsbyImage } from "gatsby-plugin-image"
import '../styles/components/case.scss'

export default function Cases ({ title, description, image }) {
  return (
  <section className="case-wrapper">
    <GatsbyImage className="case-image" image={image} alt={title}/>
    <div className="case-text">
      <h4>{description}</h4>
      <h3>{title}</h3>
      <Link className="button" to="/cases/case"><div className="button-arrow"><Arrow /></div><span className="button-text">View Case</span></Link>
    </div>
  </section>)
}