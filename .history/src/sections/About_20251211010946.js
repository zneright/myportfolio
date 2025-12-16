// src/sections/About.js

import React from 'react';
import { bio, skills, certifications, education } from '../data/aboutData';
import './About.css'; // Create this file next

function About() {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>

            {/* Bio and Summary */}
            <div className="bio-container">
                <p className="summary-text">{bio.summary}</p>
                <p className="contact-info">
                    Email: <a href={`mailto:${bio.contact.email}`}>{bio.contact.email}</a> | Phone: {bio.contact.phone}
                </p>
            </div>

            <div className="content-grid">

                {/* Skills Section */}
                <div className="skills-container">
                    <h3>Technical Skills</h3>
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="skill-category">
                            <strong>{skillCategory.category}:</strong>
                            <div className="skill-badges">
                                {skillCategory.items.map((skill, i) => (
                                    <span key={i} className="badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Education & Certifications */}
                <div className="credentials-container">
                    <h3>Education</h3>
                    {education.map((item, index) => (
                        <div key={index} className="education-item">
                            <h4>{item.degree}</h4>
                            <p>{item.institution} ({item.years})</p>
                        </div>
                    ))}

                    <h3>Certifications</h3>
                    <ul className="certification-list">
                        {certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default About;