import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import './index.scss'

export default function Home() {
  return (
  <div>
    <Seo title="Home" />
    <Header />
    <div className="homeWrapper">
      <h2>A young UI/UX Designer & Front-end developer based in Belgium.</h2>
    </div>
  </div>)
}
