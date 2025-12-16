// src/App.js (Final Component Assembly)

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'; // <-- NEW IMPORT
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer /> {/* <-- FOOTER goes outside the main content */}
    </div>
  );
}

export default App; 