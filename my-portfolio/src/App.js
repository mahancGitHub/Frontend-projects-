// src/App.js
import React from 'react';
// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './style.css'; 


function App() {
  return (
  <Router>
    <Navbar />
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
      </Routes>
    </div>
  </Router>
  );
}


export default App;
