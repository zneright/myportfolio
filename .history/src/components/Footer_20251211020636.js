// src/components/Footer.js

import React from 'react';
import { bio } from '../data/aboutData';
import './Footer.css';
// 1. Import FaInstagram here
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();
    const { name, contact } = bio;

    return (
        <footer className="footer-container">
            <div className="footer-content">

                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="social-links">
                    {/* LinkedIn */}
                    {contact.linkedin && (
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedin className="social-icon" />
                        </a>
                    )}

                    {/* GitHub */}
                    {contact.github && (
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FaGithub className="social-icon" />
                        </a>
                    )}

                    {/* Facebook */}
                    {contact.facebook && (
                        <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook className="social-icon" />
                        </a>
                    )}

                    {/* --- NEW: Instagram --- */}
                    {contact.instagram && (
                        <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram className="social-icon" />
                        </a>
                    )}

                    {/* Email */}
                    {contact.email && (
                        <a href={`mailto:${contact.email}`} aria-label="Email">
                            <FaEnvelope className="social-icon" />
                        </a>
                    )}
                </div>

                <p className="copyright">
                    &copy; {currentYear} {name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;