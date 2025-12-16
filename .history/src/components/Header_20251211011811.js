// src/components/Header.js

import React from 'react';
import './Header.css';

// Receive the toggle function and current theme as props
function Header({ toggleTheme, currentTheme }) {
    return (
        <header className="header-container">
            <div className="logo">Renz Jericho R. Buday</div>
            <nav className="nav-links">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="theme-toggle-btn"
                    aria-label={`Switch to ${currentTheme === 'light' ? 'Dark' : 'Light'} Mode`}
                >
                    {currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
                </button>
            </nav>
        </header>
    );
}

export default Header;