// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

function ProjectCard({ project }) {
    // Correct destructuring based on your new data structure
    const { title, description, techStack, imageUrl, links } = project;

    return (
        <div className="project-card">
            <div className="image-container">
                <img src={imageUrl} alt={title} className="project-image" />
                <div className="image-overlay">
                    <span className="view-project">View Details</span>
                </div>
            </div>

            <div className="card-content">
                <div className="card-header">
                    <h3>{title}</h3>
                    <span className="category-tag">{project.category}</span>
                </div>

                <p className="description">{description}</p>

                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>

                <div className="card-links">
                    <a href={links.demo} target="_blank" rel="noopener noreferrer" className="live-btn">
                        Live Demo
                    </a>
                    <a href={links.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;