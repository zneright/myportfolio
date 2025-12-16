// src/sections/Projects.js

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData'; // Import the project array
import './Projects.css';

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <h2>My Work</h2>

            {/* The Projects Grid */}
            <div className="projects-grid">
                {
                    // Use .map() to loop through the project data
                    projects.map((project) => (
                        // Pass the entire project object as a prop to the ProjectCard
                        // The 'key' is crucial for React's performance!
                        <ProjectCard key={project.id} project={project} />
                    ))
                }
            </div>
        </section>
    );
}

export default Projects;