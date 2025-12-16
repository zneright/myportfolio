// src/components/ProjectCard.js
import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    const { title, description, techStack, imageUrl, gallery, links } = project;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Left/Right Navigation Logic
    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };

    return (
        <>
            {/* THE STACK VIEW */}
            <div className="project-card" onClick={() => setIsModalOpen(true)}>
                <div className="image-stack-container">
                    <div className="stack-layer layer-3"></div>
                    <div className="stack-layer layer-2"></div>
                    <div className="image-main-wrapper">
                        <img src={imageUrl} alt={title} className="project-image" />
                        <div className="gallery-count">View {gallery.length} Photos</div>
                    </div>
                </div>
                {/* ... card details ... */}
            </div>

            {/* THE SLIDER VIEW (Turning Left/Right) */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="slider-wrapper" onClick={e => e.stopPropagation()}>
                        <button className="nav-arrow left" onClick={prevSlide}>&#10229;</button>

                        <div className="main-slide">
                            <img src={gallery[currentIndex]} alt="Project Detail" />
                        </div>

                        <button className="nav-arrow right" onClick={nextSlide}>&#10230;</button>

                        {/* Number indicator at the bottom */}
                        <div className="image-counter">
                            {currentIndex + 1} / {gallery.length}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}