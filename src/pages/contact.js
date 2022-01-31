import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import Send from '../icons/send'
import '../styles/pages/contact.scss'

export default function Contact() {
  return (
  <div>
    <Seo title="Contact" />
    <Header />
    <div className="contact-wrapper">
      <h2>Get in touch.</h2>
      <div className="contact-socials-wrapper">
        <div>
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
                <span className="form-span">Subject</span>
              </label>
            </div>
            <div>
              <label className="form-label">
                <textarea className="form-input" rows="5" placeholder=" " required />
                <span className="form-span">Message</span>
              </label>
            </div>
            <div>
              <input className="form-submit" type="submit" value="Send message" /><Send />
            </div>
          </form>
        </div>
        <div className="contact-socials">
          <h4 className="contact-type">Email</h4>
          <p><a href="mailto:jenne@cattoor.net">jenne@cattoor.net</a></p>
          <h4 className="contact-type">Social media</h4>
          <p><a href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer">Instagram</a></p>
          <p><a href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer">Dribbble</a></p>
          <p><a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
      </div>
    </div>
    <Links />
    <Footer />
  </div>)
}
