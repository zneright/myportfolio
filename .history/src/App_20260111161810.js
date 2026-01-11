// src/App.js

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  // 1. Change default state to 'dark'
  const [theme, setTheme] = useState('dark');

  // 2. Function to switch theme remains the same
  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Apply class to body (Ensure 'dark-theme' is applied when theme is 'dark')
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 4. Load saved preference, but keep 'dark' as the fallback
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme('dark'); // Explicitly set dark if no preference exists
    }
  }, []);

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;