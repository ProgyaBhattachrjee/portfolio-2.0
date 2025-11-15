import React from 'react'
import '../styles/Foot.css'
const Footer = () => {
  return (
  <section className="contact-form-section">
  <h2 className="contact-form-heading">Why Stay Stranger?</h2>
  <p>Whether it’s a collaboration, feedback, or just to say hi, I’d love to hear from you!</p>

<form
  action="https://formspree.io/f/mvgwwnkp"
  method="POST"
  className="contact-form"
>
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>

</section>

  )
}

export default Footer
