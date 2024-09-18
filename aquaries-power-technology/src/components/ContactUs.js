// src/components/ContactUs.js
import React from "react";

const ContactUs = () => {
  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit" className="cta-button">
          Send Message
        </button>
      </form>
      <div className="contact-details">
        <p>Phone: +91-123-456-7890</p>
        <p>Email: info@aquariespower.com</p>
        <p>Address: 123 Power Street, Energy City, EC 45678</p>
      </div>
    </section>
  );
};

export default ContactUs;
