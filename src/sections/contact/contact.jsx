import './contact.css'
import React from 'react'

function Contact() {
  
  return (
    <section className='contact_container' id='contact'>
    <h2>Contact Me</h2>
 <div className='contact-container'>
 <div className='contact-content'>
  <h3>Get in Touch</h3>
       <form className='form-card'>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className='contact_text input'
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className='contact_text input'
              required
            />
            <textarea
              placeholder="Your message"
              name="message"
              className='contact_text textarea'
              required
            />
            <button
              className="btn btn-primary"
              type="submit"
            >
            Send
            </button>
      </form>
      </div>
        <div className='earth-container'>
          <div className='plus'>
            <span style={{ '--i': 1 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 3 }}></span>
            <span style={{ '--i': 4 }}></span>
            <span style={{ '--i': 5 }}></span>
            <span style={{ '--i': 6 }}></span>
          </div>
        </div>
 </div>
    </section>
  )
}

export default Contact
