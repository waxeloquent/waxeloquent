import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wax Eloquent</h1>
        <p>
          Professional editorial and writing services for tech and agile project management.
        </p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About Page</div>} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/portfolio" element={<div>Portfolio Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
        </Routes>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Wax Eloquent. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;