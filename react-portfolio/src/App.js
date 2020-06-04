import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Misc from './components/Misc';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Misc/>
      <Footer/>
    </div>
  );
}

export default App;
