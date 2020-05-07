import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className='projectsSkew'>
          <h1>PROJECTS</h1>
          <svg viewBox='0 0 100 100' preserveAspectRatio="none">
            <polygon points='0,100 100,100 100,0'/>
          </svg>
        </div>
        <div className='topRow'>
          <section className='projectCard projectCard1'>
            <img src={require('../images/project-1.png')} alt="Pokedex Project" />
            <div className='project1Info'>
              <h4>Pokedex - Frontend & Backend</h4>
              <h6>Tech Used</h6>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Knex.js</li>
                <li>SQL</li>
              </ul>
              <p>This is a solo project that was built in preparation to teach and showcase React. The frontend has a specific focus on state management and react-router. The backend was made with Node.js as a simple backpack inventory management system, as well as a favorites storage for your favorite pokemon. User login/registry is present in the front end and back end.</p>
              <div className='projectLinks'>
                <a href=''>Source Code</a>
                <a href=''>Live Demo</a>
                <a href=''>Case Study</a>
              </div>
            </div>
          </section>
          <section className='projectCard projectCard2'>
            <img src={require('../images/project-1.png')} alt="Pokedex Project" />
            <div className='project1Info'>
              <h4>Cryptozoology - Open Source Backend</h4>
              <h6>Tech Used</h6>
              <ul>
                <li>Python</li>
                <li>GeoJSON</li>
                <li>Brooklyn Integers</li>
              </ul>
              <p>This is a open source project created by Simon Willison, the co-founder of Django. I am personally extremely interested in the entire cryptozoologocal field, with a heavy focus in Bigfoot and other named unknown primate species. I was looking for a backend I could work with to make a front end cryptid application, and this was the best/only backend I could find with a dataset that I really enjoyed and could see the expansion of. I have been heavily involved in creature documentation, GeoJSON creation for individual cryptids, as well as dataset creation for individual creatures for this project, and couldn't be more proud to have found something I am so passionately interested in shared in earnest with others. This is my showcase piece I am most happy to display.</p>
              <div className='projectLinks'>
                <a href=''>Source Code</a>
                <a href=''>Live Demo</a>
                <a href=''>Case Study</a>
              </div>
            </div>
          </section>
          <section className='projectCard projectCard3'>
            <img src={require('../images/project-1.png')} alt="Pokedex Project" />
            <div className='project1Info'>
              <h4>Get2It - Frontend & Backend</h4>
              <h6>Tech Used</h6>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Knex.js</li>
                <li>SQL</li>
              </ul>
              <p>This is a open source project created by Simon Willison, the co-founder of Django. I am personally extremely interested in the entire cryptozoologocal field, with a heavy focus in Bigfoot and other named unknown primate species. I was looking for a backend I could work with to make a front end cryptid application, and this was the best/only backend I could find with a dataset that I really enjoyed and could see the expansion of. I have been heavily involved in creature documentation, GeoJSON creation for individual cryptids, as well as dataset creation for individual creatures for this project, and couldn't be more proud to have found something I am so passionately interested in shared in earnest with others. This is my showcase piece I am most happy to display.</p>
              <div className='projectLinks'>
                <a href=''>Source Code</a>
                <a href=''>Live Demo</a>
                <a href=''>Case Study</a>
              </div>
            </div>
          </section>
        </div>
        <div className='bottomRow'>
          <section className='projectCard projectCard4'>
            <img src={require('../images/project-1.png')} alt="Pokedex Project" />
            <div className='project1Info'>
              <h4>Anytime Fitness - Backend</h4>
              <h6>Tech Used</h6>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Knex.js</li>
                <li>SQL</li>
              </ul>
              <p>This is a open source project created by Simon Willison, the co-founder of Django. I am personally extremely interested in the entire cryptozoologocal field, with a heavy focus in Bigfoot and other named unknown primate species. I was looking for a backend I could work with to make a front end cryptid application, and this was the best/only backend I could find with a dataset that I really enjoyed and could see the expansion of. I have been heavily involved in creature documentation, GeoJSON creation for individual cryptids, as well as dataset creation for individual creatures for this project, and couldn't be more proud to have found something I am so passionately interested in shared in earnest with others. This is my showcase piece I am most happy to display.</p>
              <div className='projectLinks'>
                <a href=''>Source Code</a>
                <a href=''>Live Demo</a>
                <a href=''>Case Study</a>
              </div>
            </div>
          </section>
          <section className='projectCard projectCard5'>
            <img src={require('../images/project-1.png')} alt="Pokedex Project" />
            <div className='project1Info'>
              <h4>React Portfolio - Frontend</h4>
              <h6>Tech Used</h6>
              <ul>
                <li>React.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Knex.js</li>
                <li>SQL</li>
              </ul>
              <p>This is a open source project created by Simon Willison, the co-founder of Django. I am personally extremely interested in the entire cryptozoologocal field, with a heavy focus in Bigfoot and other named unknown primate species. I was looking for a backend I could work with to make a front end cryptid application, and this was the best/only backend I could find with a dataset that I really enjoyed and could see the expansion of. I have been heavily involved in creature documentation, GeoJSON creation for individual cryptids, as well as dataset creation for individual creatures for this project, and couldn't be more proud to have found something I am so passionately interested in shared in earnest with others. This is my showcase piece I am most happy to display.</p>
              <div className='projectLinks'>
                <a href=''>Source Code</a>
                <a href=''>Live Demo</a>
                <a href=''>Case Study</a>
              </div>
            </div>
          </section>
        </div>
        <svg className='animatedSquare' viewBox='0 0 100 100' preserveAspectRatio='none'>
          <polygon className='animatedSquarePath' points='-10,0 -10,20 -5,20 -5,0 0,0 0,20 5,20 5,0 10,0 10,20 15,20 15,0 20,0 20,20 25,20 25,0 30,0 30,20 35,20 35,0 40,0 40,20 45,20 45,0 50,0 50,20 55,20 55,0 60,0 60,20 65,20 65,0 70,0 70,20 75,20 75,0 80,0 80,20 85,20 85,0 90,0 90,20 95,20 95,0 100,0 100,20 105,20 105,0 110,0 0,0' />
        </svg>
      </div>
    </>
  );
}

export default Projects;
