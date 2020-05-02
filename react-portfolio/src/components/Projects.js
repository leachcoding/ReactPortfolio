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
            Hi, I'm Project Card 1
          </section>
          <section className='projectCard projectCard2'>
            Hi, I'm Project Card 2
          </section>
          <section className='projectCard projectCard3'>
            Hi, I'm Project Card 3
          </section>
        </div>
        <div className='bottomRow'>
          <section className='projectCard projectCard4'>
            Hi, I'm Project Card 4
          </section>
          <section className='projectCard projectCard5'>
            Hi, I'm Project Card 5
          </section>
          <section className='projectCard projectCard6'>
            Hi, I'm Project Card 6
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
