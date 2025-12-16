// src/sections/Hero.js

import React from 'react';
import { bio } from '../data/aboutData';
import './Hero.css';

function Hero() {
    const { name, title } = bio;

    const handleDownloadResume = () => {
        // TODO: Implement actual resume download logic here
        alert("Resume download feature will be implemented soon!");
    };

    return (
        <section id="hero" className="hero-container">
            <div className="hero-grid-content"> {/* New container for side-by-side elements */}

                {/* 1. TEXT CONTENT */}
                <div className="hero-text-area">
                    <p className="greeting">Hello, I'm</p>

                    {/* Your Name - LARGE FONT */}
                    <h1 className="hero-name">{name.split(' ')[0]} <span>{name.split(' ')[1]}</span></h1>

                    {/* Your Professional Title - ACCENTED */}
                    <h2 className="hero-title">{title}</h2>

                    <div className="hero-actions">
                        <button className="primary-btn" onClick={handleDownloadResume}>
                            Download Resume
                        </button>
                        <a href="#projects" className="secondary-btn">
                            View My Work
                        </a>
                    </div>
                </div>

                {/* 2. IMAGE/VISUAL CONTENT */}
                <div className="hero-visual-area">
                    <div className="hero-profile-image">
                        {/* Placeholder for your professional avatar */}
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