import React from "react"
import { Link } from 'gatsby'
import '../styles/components/links.scss'

export default function links() {
  return (
  <section className="quick-links-wrapper">
    <h4>Quick links</h4>
    <ul className="quick-links">
      <li className="quick-link"><Link to="/" activeClassName="active">Home</Link></li>
      <li className="quick-link"><Link to="/portfolio" activeClassName="active">Portfolio</Link></li>
      <li className="quick-link"><Link to="/about" activeClassName="active">About</Link></li>
      <li className="quick-link"><Link to="/contact" activeClassName="active">Contact</Link></li>
    </ul>
  </section>)
}