// src/sections/Hero.js

import React from 'react';
import { bio } from '../data/aboutData';
import './Hero.css';

function Hero() {
    const { name, title, location } = bio; // Pull location for a small detail

    const handleDownloadResume = () => {
        alert("Resume download feature will be implemented soon!");
    };

    return (
        <section id="hero" className="hero-container">
            <div className="hero-profile-image">
                {/* TODO: Place your actual profile picture here (e.g., in /public/avatar.jpg)
                  For now, it acts as a placeholder circle.
                */}
            </div>

            <div className="hero-content">
                <p className="greeting">Hello, I'm</p>

                {/* Your Name */}
                <h1 className="hero-name">{name}</h1>

                {/* Your Professional Title */}
                <h2 className="hero-title">{title}</h2>

                {/* Subtle location/status line */}
                <p className="hero-subtitle">
                    Based in {location.split(',')[0]} | Actively seeking opportunities.
                </p>

                <div className="hero-actions">
                    <button className="primary-btn" onClick={handleDownloadResume}>
                        Download Resume
                    </button>
                    <a href="#projects" className="secondary-btn">
                        View My Work
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;