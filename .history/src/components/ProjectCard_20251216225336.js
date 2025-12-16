// src/components/ProjectCard.js
import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    const { title, description, techStack, imageUrl, gallery, links } = project;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };

    const openModal = () => {
        setCurrentIndex(0);
        setIsModalOpen(true);
    };
    return (
        <>
            <div className="project-card-wrapper">
                <div className="project-card" onClick={openModal}>
                    <div className="image-stack-container">
                        <div className="stack-layer layer-3"></div>
                        <div className="stack-layer layer-2"></div>
                        <div className="image-main-wrapper">
                            <div className="glass-reflection"></div>
                            <img src={imageUrl} alt={title} className="project-image" />
                            <div className="gallery-count">
                                <span>{gallery.length} SAMPLES</span>
                            </div>
                        </div>
                    </div>

                    <div className="card-content">
                        <div className="card-header">
                            <span className="category-pill">{project.category}</span>
                            <h3>{title}</h3>
                        </div>
                        <p className="description">{description}</p>
                        <div className="tech-stack-modern">
                            {techStack.map((tech, i) => (
                                <span key={i} className="glass-badge">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* MODAL SECTION - Enhanced with Frosted Glass UI */}
            {isModalOpen && (
                <div className="modal-overlay modern-blur" onClick={() => setIsModalOpen(false)}>
                    <div className="slider-viewport" onClick={e => e.stopPropagation()}>
                        <div className="slider-controls-top">
                            <div className="project-info-mini">
                                <h4>{title}</h4>
                                <p>{currentIndex + 1} of {gallery.length}</p>
                            </div>
                            <button className="close-modern" onClick={() => setIsModalOpen(false)}>&times;</button>
                        </div>

                        <div className="main-display">
                            <button className="glass-nav prev" onClick={prevSlide}>&#8592;</button>
                            <div className="image-stage">
                                <img src={gallery[currentIndex]} alt="Gallery" className="active-slide" />
                            </div>
                            <button className="glass-nav next" onClick={nextSlide}>&#8594;</button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="slider-pagination">
                            {gallery.map((_, i) => (
                                <div key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;