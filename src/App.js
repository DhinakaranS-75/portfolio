import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About';
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
    </>
    
  );
}

export default App;
