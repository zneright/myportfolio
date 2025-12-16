// src/sections/Hero.js

import React from 'react';
import { bio } from '../data/aboutData'; // Import your biographical data
import './Hero.css'; // Import its local styles

function Hero() {
    // Use the data pulled from the bio object
    const { name, title } = bio;

    // Placeholder function for a button action (e.g., download resume)
    const handleDownloadResume = () => {
        // TODO: Implement actual resume download logic here
        alert("Resume download feature will be implemented soon!");
    };

    return (
        <section id="hero" className="hero-container">
            <div className="hero-content">

                <p className="greeting">Hello, I'm</p>

                {/* Your Name */}
                <h1 className="hero-name">{name}</h1>

                {/* Your Professional Title */}
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
            {/* You can add an avatar/profile picture placeholder here */}
            {/* <div className="hero-image"></div> */}
        </section>
    );
}

export default Hero;