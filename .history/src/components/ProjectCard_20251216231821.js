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

                <div className="slider-header">
                    <div className="slider-info">
                        <h3>{title}</h3>
                        <div className="slider-counter">
                            <span className="current">{currentIndex + 1}</span>
                            <span className="total"> / {gallery.length}</span>
                        </div>
                    </div>
                    <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
                </div>

                <div className="slider-main">
                    <button className="nav-arrow left" onClick={prevSlide}>&#10229;</button>

                    <div className="image-window">
                        <img
                            key={currentIndex}
                            src={gallery[currentIndex]}
                            alt="Project View"
                            className="slide-img"
                        />
                    </div>

                    <button className="nav-arrow right" onClick={nextSlide}>&#10230;</button>
                </div>

                <div className="slider-thumbnails">
                    {gallery.map((img, i) => (
                        <div
                            key={i}
                            className={`thumb-wrapper ${i === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(i)}
                        >
                            <img src={img} alt="Thumbnail" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className="project-card" onClick={() => setIsModalOpen(true)}>
                <div className="photo-stack-container">
                    {/* The Stacked Effect */}
                    <div className="stack-photo stack-3"></div>
                    <div className="stack-photo stack-2"></div>
                    <div className="stack-photo stack-main">
                        <img src={imageUrl} alt={title} />
                        <div className="stack-badge">{gallery.length} PHOTOS</div>
                    </div>
                </div>

                <div className="card-details">
                    <span className="card-category">{project.category}</span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="tag-container">
                        {techStack.map((tag, i) => <span key={i} className="tech-tag">{tag}</span>)}
                    </div>
                </div>
            </div>

            {isModalOpen && createPortal(<ModalContent />, document.body)}
        </>
    );
}

export default ProjectCard;