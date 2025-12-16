// src/components/Footer.js

import React from 'react';
// 1. Import the data
import { bio } from '../data/aboutData';
import './Footer.css';
// 2. Import brand icons from react-icons/fa (Font Awesome)
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();
    // 3. Destructure name AND contact info
    const { name, contact } = bio;

    return (
        <footer className="footer-container">
            <div className="footer-content">

                {/* Quick Links (Text links stay the same) */}
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                {/* Social Media Icons */}
                <div className="social-links">
                    {/* LinkedIn Icon - Only shows if data exists */}
                    {contact.linkedin && (
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                            <FaLinkedin className="social-icon" />
                        </a>
                    )}

                    {/* GitHub Icon */}
                    {contact.github && (
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                            <FaGithub className="social-icon" />
                        </a>
                    )}

                    {/* Facebook Icon */}
                    {contact.facebook && (
                        <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                            <FaFacebook className="social-icon" />
                        </a>
                    )}

                    {/* Email Icon */}
                    {contact.email && (
                        <a href={`mailto:${contact.email}`} aria-label="Send Email">
                            <FaEnvelope className="social-icon" />
                        </a>
                    )}
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