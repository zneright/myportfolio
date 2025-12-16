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
            <div className="project-card" onClick={openModal}>
                <div className="image-stack-container">
                    {/* Unique tilted stack effect */}
                    <div className="stack-layer layer-3"></div>
                    <div className="stack-layer layer-2"></div>
                    <div className="image-main-wrapper">
                        <img src={imageUrl} alt={title} className="project-image" />
                        <div className="gallery-count">
                            <i className="fas fa-images"></i> {gallery.length} Photos
                        </div>
                    </div>
                </div>

                <div className="card-content">
                    <div className="card-header">
                        <h3>{title}</h3>
                        <span className="category-tag">{project.category}</span>
                    </div>
                    <p className="description">{description}</p>
                    <div className="tech-stack">
                        {techStack.map((tech, i) => <span key={i} className="tech-badge">{tech}</span>)}
                    </div>
                </div>
            </div>

            {/* INTERACTIVE SLIDER MODAL */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="slider-container" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</button>

                        <button className="nav-btn prev" onClick={prevSlide}>&#10094;</button>

                        <div className="slider-main">
                            <img
                                src={gallery[currentIndex]}
                                alt={`View ${currentIndex + 1}`}
                                className="slider-img"
                            />
                        </div>

                        <button className="nav-btn next" onClick={nextSlide}>&#10095;</button>

                        {/* Status Indicator */}
                        <div className="slider-status">
                            <span className="current">{currentIndex + 1}</span>
                            <span className="divider">/</span>
                            <span className="total">{gallery.length}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;