// src/App.js (Example update)

import './App.css'; 
import Header from './components/Header';
import About from './sections/About';      // <-- NEW
import Projects from './sections/Projects'; // Keep this from before

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* You'd typically add a Hero component here */}
        <About />   {/* Your personal info */}
        <Projects />{/* Your project cards */}
        {/* You'd add a Contact component here */}
      </main>
    </div>
  );
}

export default App;