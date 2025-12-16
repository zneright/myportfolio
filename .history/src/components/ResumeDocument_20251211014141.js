// src/components/ResumeDocument.js
import React from 'react';
import { bio, skills, education, certifications } from '../data/aboutData';
import './ResumeDocument.css'; // We'll style this for print

// This component is the *content* that gets converted to PDF
const ResumeDocument = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="resume-page">

            {/* HEADER SECTION */}
            <div className="resume-header">
                <h1>{bio.name}</h1>
                <p className="resume-title">{bio.title}</p>
                <div className="contact-line">
                    <span>{bio.contact.phone}</span> |
                    <a href={`mailto:${bio.contact.email}`}>{bio.contact.email}</a>
                </div>
            </div>

            {/* SUMMARY */}
            <div className="resume-section">
                <h2>Summary</h2>
                <p>{bio.summary}</p>
            </div>

            {/* SKILLS */}
            <div className="resume-section">
                <h2>Skills</h2>
                <ul className="skills-list">
                    {skills.map((cat, index) => (
                        <li key={index}>
                            <strong>{cat.category}:</strong> {cat.items.join(', ')}
                        </li>
                    ))}
                </ul>
            </div>

            {/* EDUCATION */}
            <div className="resume-section">
                <h2>Education</h2>
                {education.map((item, index) => (
                    <div key={index} className="education-entry">
                        <h3>{item.degree}</h3>
                        <p>{item.institution} | <span>{item.years}</span></p>
                    </div>
                ))}
            </div>

            {/* CERTIFICATIONS */}
            <div className="resume-section">
                <h2>Certifications</h2>
                <ul className="certifications-list">
                    {certifications.map((cert, index) => (
                        <li key={index}>{cert}</li>
                    ))}
                </ul>
            </div>

            {/* PLACEHOLDER FOR PROJECTS - MUST BE FILLED MANUALLY IN YOUR DATA */}
            {/* If you provide project data, this section would map over it */}
            <div className="resume-section">
                <h2>Key Projects</h2>
                <p>Details about your Java and SAP projects will appear here once the data is provided.</p>
            </div>

        </div>
    );
});

export default ResumeDocument;