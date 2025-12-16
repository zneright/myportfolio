// src/sections/Projects.js

import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';
import './Projects.css';


function Projects() {
    // State to track the currently selected category
    const [activeCategory, setActiveCategory] = useState('All');

    // Define the categories you want to show
    const categories = ['All', 'Web Dev', 'Mobile', 'Systems'];

    // Filter logic: If 'All' is selected, show everything. Otherwise, match the category.
    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">

                {/* Header Section */}
                <div className="projects-header">
                    <h2>Featured Projects</h2>
                    <p className="section-subtitle">A selection of my technical work and experiments.</p>
                </div>

                {/* Filter Buttons */}
                <div className="filter-container">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* The Projects Grid */}
                <div className="projects-grid">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <div key={project.id} className="fade-in">
                                <ProjectCard project={project} />
                            </div>
                        ))
                    ) : (
                        <p className="no-projects-msg">No projects found in this category yet.</p>
                    )}
                </div>

            </div>
        </section>
    );
}

export default Projects;