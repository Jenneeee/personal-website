import React from "react"
import { Link } from 'gatsby'
import Seo from "../components/seo"
import Header from '../components/header'
import Check from '../icons/check'
import Arrow from '../icons/arrow'
import Links from '../components/links'
import Footer from '../components/footer'
import '../styles/pages/success.scss'

export default function Success() {
  return (
  <div>
    <Seo title="Contact" />
    <Header />
    <div className="success-wrapper">
      <Check />
      <h2>Message sent!</h2>
      <p>It's great to hear from you! Your message has been successfully received and I will respond as soon as possible. In general, I respond within 24 hours.</p>
      <Link className="button success-button" to="/contact"><div className="button-arrow"><Arrow /></div><span className="button-text">Go back</span></Link>
    </div>
    <Links />
    <Footer />
  </div>)
}
