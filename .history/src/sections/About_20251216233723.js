import React from 'react';
import { bio, skills, certifications, education } from '../data/aboutData';
import './About.css';

const TimelineItem = ({ degree, institution, years }) => (
    <div className="education-item">
        <div className="timeline-dot"></div>
        <div className="education-content">
            <span className="years-pill">{years}</span>
            <h4 className="degree">{degree}</h4>
            <p className="institution">{institution}</p>
        </div>
    </div>
);

function About() {
    return (
        <section id="about" className="about-section">
            <div className="about-glass-container">

                {/* 1. HERO HEADER */}
                <div className="about-header">
                    <div className="title-block">
                        <h2>About Me</h2>
                    </div>
                    <div className="contact-meta-modern">
                        <a href={`mailto:${bio.contact.email}`} className="meta-item">
                            <span className="icon">✉️</span> {bio.contact.email}
                        </a>gu
                        <div className="meta-item">
                            <span className="icon">📞</span> {bio.contact.phone}
                        </div>
                    </div>
                </div>

                {/* 2. BOLD BIO STATEMENT */}
                <div className="bio-statement">
                    <div className="quote-mark">“</div>
                    <p className="summary-text">{bio.summary}</p>
                </div>

                {/* 3. DYNAMIC CONTENT GRID */}
                <div className="modern-grid">

                    {/* LEFT: Skills with Category Focus */}
                    <div className="skills-column">
                        <h3 className="section-label">Technical Mastery</h3>
                        <div className="skills-wrapper">
                            {skills.map((skillCategory, index) => (
                                <div key={index} className="skill-group">
                                    <h4 className="skill-group-title">{skillCategory.category}</h4>
                                    <div className="badge-cloud">
                                        {skillCategory.items.map((skill, i) => (
                                            <span key={i} className="skill-chip">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Professional Journey */}
                    <div className="journey-column">
                        <div className="journey-segment">
                            <h3 className="section-label">Education</h3>
                            <div className="custom-timeline">
                                {education.map((item, index) => (
                                    <TimelineItem key={index} {...item} />
                                ))}
                            </div>
                        </div>

                        <div className="journey-segment certs">
                            <h3 className="section-label">Expertise & Certs</h3>
                            <div className="cert-grid">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="cert-card">
                                        <span className="cert-icon">🏆</span>
                                        <p>{cert}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;