// src/sections/About.js (Component Logic)

import React from 'react';
import { bio, skills, certifications, education } from '../data/aboutData';
import './About.css';

const TimelineItem = ({ degree, institution, years }) => (
    <div className="education-item">
        <h4 className="degree">{degree}</h4>
        <p className="institution">{institution}</p>
        <span className="years">{years}</span>
    </div>
);

function About() {
    return (
        <section id="about" className="about-section">

            <div className="section-header">
                <h2>About Me</h2>
                <div className="contact-meta">
                    <p><a href={`mailto:${bio.contact.email}`} className="contact-link">{bio.contact.email}</a></p>
                    <p>{bio.contact.phone}</p>
                </div>
            </div>

            {/* Unique Design Element: Summary Text placed outside the main grid flow */}
            <div className="bio-container">
                <p className="summary-text">{bio.summary}</p>
            </div>
            {/* End Unique Element */}


            <div className="content-grid">

                {/* Left Column: Skills */}
                <div className="skills-container">
                    <h3>Technical Skills</h3>
                    <p className="skills-intro">Core competency categories that drive systems and development.</p> {/* NEW subtle descriptive line */}
                    {skills.map((skillCategory, index) => (
                        <div key={index} className="skill-category">
                            <strong className="skill-title">{skillCategory.category}</strong>
                            <div className="skill-badges">
                                {skillCategory.items.map((skill, i) => (
                                    <span key={i} className="badge">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column: Education & Certifications */}
                <div className="credentials-container">

                    <h3>Education History</h3>
                    <div className="education-timeline">
                        {education.map((item, index) => (
                            <TimelineItem
                                key={index}
                                degree={item.degree}
                                institution={item.institution}
                                years={item.years}
                            />
                        ))}
                    </div>

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