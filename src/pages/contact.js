import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import './contact.scss'

export default function Contact() {
  return (
  <div>
    <Seo title="Contact" />
    <Header />
    <div className="contactWrapper">
      <h2>Get in touch.</h2>
      <p>Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</p>
      <form className="contactForm" action="https://getform.io/f/e1b8e397-db22-4f1d-8485-432909bbe423" method="POST">
        <input className="formInput" type="text" name="name" placeholder="Your name" required></input>
        <input className="formInput" type="email" name="email" placeholder="Your email" required></input>
        <textarea className="formInput" maxLength="1000" name="message" rows="5" placeholder="message" required></textarea>
        <button type="submit" className="button">Send away</button>
      </form>
    </div>
  </div>)
}
