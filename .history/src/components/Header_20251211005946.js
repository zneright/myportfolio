// src/components/Header.js

import React from 'react';
import './Header.css'; // We'll create this file next

function Header() {
    return (
        <header className="header-container">
            <div className="logo">Your Name / Logo</div>
            <nav className="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header;