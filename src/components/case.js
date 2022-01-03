import React from "react"
import { Link } from 'gatsby'
import Arrow from '../icons/arrow'
import { StaticImage } from "gatsby-plugin-image"
import './case.scss'

export default function Case() {
  return (
  <section className="case-wrapper">
    <StaticImage src="../images/case1.jpg" alt="A rectangle" />
    <p>Google Doodle - School Project</p>
    <h3>01: Making a Google Doodle</h3>
    <Link className="button" to="/"><div className="button-arrow"><Arrow /></div><span className="button-text">Vieuw case</span></Link>
  </section>)
}