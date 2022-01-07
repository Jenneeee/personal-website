import React from "react"
import { Link } from 'gatsby'
import Arrow from '../icons/arrow'
import { GatsbyImage } from "gatsby-plugin-image"
import '../styles/components/case.scss'

export default function Case({ title, description, image }) {
  return (
  <section className="case-wrapper">
    <GatsbyImage image={image} alt={title}/>
    <h4>{description}</h4>
    <h3>{title}</h3>
    <Link className="button" to="/"><div className="button-arrow"><Arrow /></div><span className="button-text">View case</span></Link>
  </section>)
}