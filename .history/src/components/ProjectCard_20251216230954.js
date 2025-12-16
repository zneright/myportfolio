import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ProjectCard.css';

function ProjectCard({ project }) {
    const { title, description, techStack, imageUrl, gallery } = project;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
            const handleKeyDown = (e) => {
                if (e.key === "ArrowRight") nextSlide();
                if (e.key === "ArrowLeft") prevSlide();
                if (e.key === "Escape") setIsModalOpen(false);
            };
            window.addEventListener("keydown", handleKeyDown);
            return () => {
                window.removeEventListener("keydown", handleKeyDown);
                document.body.style.overflow = 'auto';
            };
        }
    }, [isModalOpen]);

    const ModalContent = () => (
        <div className="modal-overlay modern-blur" onClick={() => setIsModalOpen(false)}>
            <div className="slider-viewport" onClick={e => e.stopPropagation()}>
                <div className="slider-controls-top">
                    <div className="project-info-mini">
                        <h4>{title}</h4>
                        <p>{currentIndex + 1} / {gallery.length} SAMPLES</p>
                    </div>
                    <button className="close-modern" onClick={() => setIsModalOpen(false)}>&times;</button>
                </div>

                <div className="main-display">
                    <button className="glass-nav prev" onClick={prevSlide}>&#10229;</button>
                    <div className="image-stage">
                        {/* The Modal uses contain to ensure 100% of the image is visible */}
                        <img
                            src={gallery[currentIndex]}
                            alt="Full View"
                            className="active-slide"
                        />
                    </div>
                    <button className="glass-nav next" onClick={nextSlide}>&#10230;</button>
                </div>

                <div className="slider-pagination">
                    {gallery.map((_, i) => (
                        <div key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(i)} />
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="project-card-wrapper">
                <div className="project-card" onClick={() => setIsModalOpen(true)}>
                    <div className="image-stack-container">
                        <div className="stack-layer layer-3"></div>
                        <div className="stack-layer layer-2"></div>
                        <div className="image-main-wrapper">
                            <div className="glass-reflection"></div>
                            {/* The Preview image */}
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

            {isModalOpen && createPortal(<ModalContent />, document.body)}
        </>
    );
}

export default ProjectCard;