// src/sections/Contact.js
import React, { useState } from 'react';
import { bio } from '../data/aboutData';
import './Contact.css';

function Contact() {
    const { email, phone } = bio.contact;
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        // REPLACE 'your_form_id' with the ID from Formspree
        const response = await fetch("https://formspree.io/f/xldqynbv", {
            method: "POST",
            body: data,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            setStatus("SUCCESS");
            form.reset();
        } else {
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <div className="contact-info-panel">
                    <span className="sub-tag">03. Contact</span>
                    <h2>Get In Touch</h2>
                    <p>I am actively seeking opportunities in System Administration and Software Development. My inbox is always open.</p>

                    <div className="info-cards">
                        <div className="info-card">
                            <span className="icon">✉️</span>
                            <div>
                                <h4>Email</h4>
                                <a href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>
                        <div className="info-card">
                            <span className="icon">📞</span>
                            <div>
                                <h4>Phone</h4>
                                <a href={`tel:${phone}`}>{phone}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-panel">
                    <form className="modern-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input type="text" name="name" placeholder="Name" required />
                        </div>
                        <div className="input-group">
                            <input type="email" name="email" placeholder="Email Address" required />
                        </div>
                        <div className="input-group">
                            <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
                        </div>

                        <button type="submit" className="submit-btn-modern">
                            {status === "" && "Send Message"}
                            {status === "SUCCESS" && "Message Sent!"}
                            {status === "ERROR" && "Error Sending."}
                        </button>

                        {status === "SUCCESS" && <p className="success-msg">Thank you! I will get back to you shortly.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;