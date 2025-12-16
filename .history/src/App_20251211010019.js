// src/App.js

import './App.css'; // For general app styles
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Other sections will go here: Hero, About, Projects, Contact */}
      <main>
        {/* Replace with your Section Components */}
        <h2>Welcome to my portfolio!</h2>
      </main>
    </div>
  );
}

export default App;