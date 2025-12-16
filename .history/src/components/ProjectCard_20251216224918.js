// src/components/ProjectCard.js
import React, { useState } from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    const { title, description, techStack, imageUrl, gallery, links } = project;
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="project-card" onClick={() => setIsModalOpen(true)}>
                <div className="image-stack-container">
                    {/* Visual "Stack" effect for unique professional look */}
                    <div className="stack-layer layer-3"></div>
                    <div className="stack-layer layer-2"></div>
                    <div className="image-main-wrapper">
                        <img src={imageUrl} alt={title} className="project-image" />
                        <div className="gallery-count">+{gallery.length} Photos</div>
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

            {/* HIGH-END GALLERY MODAL */}
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-modal" onClick={() => setIsModalOpen(false)}>&times;</button>
                        <div className="modal-grid">
                            {gallery.map((img, idx) => (
                                <div key={idx} className="modal-image-wrapper">
                                    <img src={img} alt={`Slide ${idx}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProjectCard;