// src/components/ProjectCard.js

import React from 'react';
import './ProjectCard.css'; // Import its local styles

// We use object destructuring { project } to easily access the prop
function ProjectCard({ project }) {
    // Destructure the properties from the project object
    const { title, description, techStack, imageUrl, liveUrl, githubUrl } = project;

    return (
        <div className="project-card">
            <img src={imageUrl} alt={`Preview of ${title}`} className="project-image" />
            <div className="card-content">
                <h3>{title}</h3>
                <p className="description">{description}</p>

                {/* Render the tech stack as a list of badges */}
                <div className="tech-stack">
                    {techStack.map((tech, index) => (
                        <span key={index} className="tech-badge">{tech}</span>
                    ))}
                </div>

                {/* Action buttons */}
                <div className="card-links">
                    <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="live-btn">
                        Live Demo
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-btn">
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;