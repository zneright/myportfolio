// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; // <-- NEW IMPORT
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
// ... other imports ...

function App() {
  // 1. Initialize state for the theme (default to 'light')
  const [theme, setTheme] = useState('light');

  // 2. Function to switch theme
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. useEffect to apply the class to the <body> element
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : '';
    // Optional: Save the preference to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Optional: useEffect to load saved theme preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);


  return (
    <div className="App">
      {/* 4. Pass the toggle function down to the Header component */}
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        {/* ... all your sections ... */}
      </main>
      <Footer />
    </div>
  );
}

export default App;