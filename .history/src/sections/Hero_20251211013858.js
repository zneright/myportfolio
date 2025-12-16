// src/sections/Hero.js

import React from 'react';
import React, { useRef } from 'react'; // NEW: Import useRef
import { bio, skills, education, certifications } from '../data/aboutData'; // Need all data
import './Hero.css';
import profileImage from '../assets/profile-avatar.jpg';
// NOTE: Ensure the path '../assets/profile-avatar.jpg' is correct

function Hero() {
    const { name, title } = bio;

    // OLD: The handleDownloadResume function is no longer needed.
    // REMOVE: const handleDownloadResume = () => { ... };

    return (
        <section id="hero" className="hero-container">
            <div className="hero-grid-content">

                {/* 1. TEXT CONTENT */}
                <div className="hero-text-area">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="hero-name">{name.split(' ')[0]} <span>{name.split(' ')[1]}</span></h1>
                    <h2 className="hero-title">{title}</h2>

                    <div className="hero-actions">

                        {/* CHANGE 1: Functional Resume Download Link */}
                        <a
                            href="/Renz_Jericho_Buday_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="primary-btn"
                            download // This attribute prompts the browser to download the file
                        >
                            Download Resume
                        </a>

                        <a href="#projects" className="secondary-btn">
                            View My Work
                        </a>
                    </div>
                </div>

                {/* 2. IMAGE/VISUAL CONTENT */}
                <div className="hero-visual-area">
                    {/* CHANGE 2: Display the imported image */}
                    <div className="hero-profile-image-container">
                        <img
                            src={profileImage}
                            alt="Renz Jericho R. Buday - Profile Avatar"
                            className="hero-profile-image"
                        />
                    </div>

                    <p className="sub-tagline">
                        System Admin, Java, & SAP Certified.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;