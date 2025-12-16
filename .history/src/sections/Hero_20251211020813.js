// src/sections/Hero.js

import React, { useRef } from 'react';
import html2canvas from 'html2canvas'; // NEW
import { jsPDF } from 'jspdf';         // NEW

import { bio } from '../data/aboutData';
import './Hero.css';
import profileImage from '../assets/profile-avatar.jpg';
// NEW: Import the printable resume component
import ResumeDocument from '../components/ResumeDocument';


function Hero() {
    const { name, title } = bio;

    // 1. Create a reference to the ResumeDocument component
    const resumeRef = useRef();

    // 2. The new PDF generation function
    const generatePdf = () => {
        // Find the element via the ref
        const input = resumeRef.current;

        if (!input) {
            alert("Resume content not found for export.");
            return;
        }

        // Use html2canvas to convert the HTML element to a canvas image
        html2canvas(input, {
            scale: 2, // Higher scale = better resolution
            useCORS: true
        }).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4'); // 'p'ortrait, 'mm' units, 'a4' size

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            // Add the canvas image to the PDF
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

            // Download the PDF file
            pdf.save(`${name.replace(/ /g, '_')}_Resume.pdf`);
        });
    };

    // The previous code using the static link is now replaced by the logic above.
    return (
        <section id="hero" className="hero-container">
            {/* The resume component is rendered off-screen temporarily for PDF capture */}
            <div style={{ position: 'absolute', left: '-9999px' }}>
                <ResumeDocument ref={resumeRef} />
            </div>

            <div className="hero-grid-content">
                <div className="hero-text-area">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="hero-name">{name.split(' ')[0]} <span>{name.split(' ')[1]}</span></h1>
                    <h2 className="hero-title">{title}</h2>

                    <div className="hero-actions">

                        {/* ATTACH THE PDF GENERATION FUNCTION HERE */}
                        <button
                            onClick={generatePdf}
                            className="primary-btn"
                        >
                            Download Resume
                        </button>

                        <a href="#projects" className="secondary-btn">
                            View My Work
                        </a>
                    </div>
                </div>

                {/* 2. IMAGE/VISUAL CONTENT */}
                <div className="hero-visual-area">
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