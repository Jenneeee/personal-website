import React from "react"
import { Link } from 'gatsby'
import Arrow from '../icons/arrow'
import { StaticImage } from "gatsby-plugin-image"
import './case.scss'

export default function Case({ title, description}) {
  return (
  <section className="case-wrapper">
    <StaticImage src="../data/images/project1.jpg" alt="A rectangle" />
    <p>{description}</p>
    <h3>{title}</h3>
    <Link className="button" to="/"><div className="button-arrow"><Arrow /></div><span className="button-text">View case</span></Link>
  </section>)
}