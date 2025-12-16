// src/sections/Contact.js

import React from 'react';
import { bio } from '../data/aboutData'; // Import your contact info
import './Contact.css'; // Import local styles

function Contact() {
    const { email, phone } = bio.contact;

    // Placeholder function for form submission (Front-end validation only)
    const handleSubmit = (e) => {
        e.preventDefault();

        // In a real application, you would send this data to a backend service 
        // (e.g., Formspree, Netlify Forms, or your own server API).
        alert("Thank you for your message! (Form submission is disabled in this demo).");

        // Reset form after alert for demo purposes
        e.target.reset();
    };

    return (
        <section id="contact" className="contact-section">
            <h2>Get In Touch</h2>
            <p className="contact-intro">
                I am actively seeking opportunities to apply my System Administration and Java skills. Feel free to reach out!
            </p>

            {/* Direct Contact Info */}
            <div className="contact-details">
                <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
                {/* TODO: Add social links like LinkedIn or GitHub here */}
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send a Message</h3>

                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;