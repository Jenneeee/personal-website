import React from "react"
import { Link } from 'gatsby'
import Seo from "../components/seo"
import Header from '../components/header'
import Arrow from '../icons/arrow'
import './index.scss'

export default function Home() {
  return (
  <div>
    <Seo title="Home" />
    <Header />
    <div className="homeWrapper">
      <h2>A young UI/UX Designer & Front-end developer based in Belgium.</h2>
      <Link className="button" to="/about"><div className="button-arrow"><Arrow /></div><span className="button-text">More about me</span></Link>
    </div>
  </div>)
}
