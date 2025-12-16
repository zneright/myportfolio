// src/App.js (Example update)

import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact'; // <-- NEW IMPORT

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact /> {/* <-- CONTACT goes last */}
      </main>
      {/* Footer component will go here */}
    </div>
  );
}

export default App;