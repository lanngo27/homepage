import React, { useState, useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'
require('dotenv').config()

const Contact = () => {
  const form = useRef()
  const [message, setMessage] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE,
      process.env.REACT_APP_EMAILJS_TEMPLATE,
      form.current,
      process.env.REACT_APP_EMAILJS_KEY
    )
    e.target.reset()

    setMessage('Your message is sent!')
    setTimeout(() => setMessage(null), 5000)
  }
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ntthanhlan27994@gmail.com</h5>
            <a href="mailto:ntthanhlan27994@gmail.com">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          {message ? <p className="contact__message">{message}</p> : null}
        </form>
      </div>
    </section>
  )
}

export default Contact
