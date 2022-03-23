import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import { motion } from "framer-motion"

export default function About () {
  return (
  <div>
    <Seo title="About" />
    <Header />
    <Links />
    <Footer />
  </div>)
}
