import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import '../styles/pages/contact.scss'

export default function Contact() {
  return (
  <div>
    <Seo title="Contact" />
    <Header />
    <div className="contact-wrapper">
      <h2>Get in touch.</h2>
      <p>Say hello! Whether it’s a chat about anything design or development related or a potential project or opportunity you may have in mind, hit me up.</p>
      <form className="contact-form" action="" method="post">
        <div>
          <label className="form-label">
            <input className="form-input" type="text" placeholder=" " required />
            <span className="form-span">Your name</span>
          </label>
        </div>
        <div>
          <label className="form-label">
            <input className="form-input" type="email" placeholder=" " required />
            <span className="form-span">Your email</span>
          </label>
        </div>
        <div>
          <label className="form-label">
            <input className="form-input" type="text" placeholder=" " required />
            <span className="form-span">subject</span>
          </label>
        </div>
        <div>
          <label className="form-label">
            <textarea className="form-input" rows="5" placeholder=" " required />
            <span className="form-span">Message</span>
          </label>
       </div>
        <input className="form-submit" type="submit" value="Send message" />
      </form>
    </div>
    <Links />
    <Footer />
  </div>)
}
