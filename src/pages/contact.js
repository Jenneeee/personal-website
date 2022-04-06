import React from "react"
import Seo from "../components/seo"
import Header from '../components/header'
import Links from '../components/links'
import Footer from '../components/footer'
import Send from '../icons/send'
import './contact.scss'

export default function Contact() {

  const handleSubmitForm = e => {
    e.preventDefault();
    const inputs = document.querySelectorAll(`.form-input`);
    inputs.forEach($input => showValidationInfo($input));
  };

  const handleInputField = e => {
    const $input = e.currentTarget;
    const $error = $input.parentElement.querySelector(`.form-error`);
    if ($input.checkValidity()) {
      $error.innerHTML = ``;
    }
  };

  const showValidationInfo = $input => {
    const $error = $input.parentElement.querySelector(`.form-error`);

    if ($input.validity.valueMissing) {
      $error.innerHTML = `&#10006 This field is mandatory`;
    }
    if ($input.validity.typeMismatch) {
      $error.innerHTML = `&#10006 We're expecting a valid e-mailadres`;
    }
  };

  const handleBlurInput = e => {
    showValidationInfo(e.currentTarget);
  };




  return (
    <div>
      <Seo title="Contact" />
      <Header />
      <div className="contact-wrapper">
        <h2 className="contact-title">Get in touch.</h2>
        <div className="contact-socials-wrapper">
          <div>
            <p>I'd love to hear from you! If you'd like to chat about design or development, or if you have a potential project or opportunity in mind, let's talk.</p>
            <form className="contact-form" method="post" action="https://www.flexyform.com/f/991dc242d3a4e62f38823587dc8a62657d85f435">
              <div>
                <label className="form-label">
                  <input className="form-input" type="text" placeholder=" " name="name" required onBlur={handleBlurInput} onInput={handleInputField} />
                  <span className="form-span">Your name</span>
                  <span className="form-error"></span>
                </label>
              </div>
              <div>
                <label className="form-label">
                  <input className="form-input" type="email" placeholder=" " name="email" required onBlur={handleBlurInput} onInput={handleInputField} />
                  <span className="form-span">Your email</span>
                  <span className="form-error"></span>
                </label>
              </div>
              <div>
                <label className="form-label">
                  <input className="form-input" type="text" placeholder=" " name="subject" required onBlur={handleBlurInput} onInput={handleInputField} />
                  <span className="form-span">Subject</span>
                  <span className="form-error"></span>
                </label>
              </div>
              <div>
                <label className="form-label">
                  <textarea className="form-input" rows="5" placeholder=" " name="message" required onBlur={handleBlurInput} onInput={handleInputField} />
                  <span className="form-span">Message</span>
                  <span className="form-error"></span>
                </label>
              </div>
              <button type="submit" className="form-submit" onMouseDown={handleSubmitForm} >Send message <Send /></button>
            </form>
          </div>
          <div className="contact-socials">
            <h4 className="contact-type">Email</h4>
            <p><a href="mailto:hello@jennecattoor.com">hello@jennecattoor.com</a></p>
            <h4 className="contact-type">Social media</h4>
            <p><a href="https://www.instagram.com/jennecattoor" target="_blank" rel="noreferrer">Instagram</a></p>
            <p><a href="https://dribbble.com/Cattoor" target="_blank" rel="noreferrer">Dribbble</a></p>
            <p><a href="https://www.linkedin.com/in/jennecattoor" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p><a href="https://github.com/Jenneeee" target="_blank" rel="noreferrer">GitHub</a></p>
          </div>
        </div>
      </div>
      <Links />
      <Footer />
    </div>)
}
