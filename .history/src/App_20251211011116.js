// src/App.js (Example update)

import './App.css';
import Header from './components/Header';
import Hero from './sections/Hero';      // <-- NEW IMPORT
import About from './sections/About';
import Projects from './sections/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />      {/* <-- HERO goes first */}
        <About />
        <Projects />
        {/* ... Contact component here ... */}
      </main>
    </div>
  );
}

export default App;