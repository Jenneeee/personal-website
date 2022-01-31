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
          <p>I'd love to hear from you! If you'd like to chat about design or development, or if you have a potential project or opportunity in mind, let's talk.</p>
          <form className="contact-form" method="post" action="https://www.flexyform.com/f/991dc242d3a4e62f38823587dc8a62657d85f435">
            <div>
              <label className="form-label">
                <input className="form-input" type="text" placeholder=" " name="name" required />
                <span className="form-span">Your name</span>
                <span className="form-error">This is an error message</span>
              </label>
            </div>
            <div>
              <label className="form-label">
                <input className="form-input" type="email" placeholder=" " name="email" required />
                <span className="form-span">Your email</span>
              </label>
            </div>
            <div>
              <label className="form-label">
                <input className="form-input" type="text" placeholder=" " name="subject" required />
                <span className="form-span">Subject</span>
              </label>
            </div>
            <div>
              <label className="form-label">
                <textarea className="form-input" rows="5" placeholder=" " name="message" required />
                <span className="form-span">Message</span>
              </label>
            </div>
              <button type="submit" className="form-submit">Send message <Send /></button>
          </form>
        </div>
        <div className="contact-socials">
          <h4 className="contact-type">Email</h4>
          <p><a href="mailto:jenne@cattoor.net">jenne@cattoor.net</a></p>
          <h4 className="contact-type">Social media</h4>
          <p><a href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer">Instagram</a></p>
          <p><a href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer">Dribbble</a></p>
          <p><a href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
      </div>
    </div>
    <Links />
    <Footer />
  </div>)
}
