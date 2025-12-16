// src/components/Footer.js

import React from 'react';
import { bio } from '../data/aboutData'; // Import your name
import './Footer.css'; // Import local styles

function Footer() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();
    const { name } = bio;

    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Quick Links */}
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Social Media/Quick Contact (Placeholders) */}
                <div className="social-links">
                    {/* TODO: Replace '#' with your actual social links (LinkedIn, GitHub) */}
                    <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={`mailto:${bio.contact.email}`}>{bio.contact.email}</a>
                </div>

                {/* Copyright */}
                <p className="copyright">
                    &copy; {currentYear} {name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;