import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      {/* Bio - About */}
      {/* Tech Section */}
      {/* Projects Section*/}
      {/* Open Source Blog Section*/}
      <Footer/>
      <Projects/>
    </div>
  );
}

export default App;
