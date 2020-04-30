import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <h1>PROJECTS</h1>
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
      </div>
    </>
  );
}

export default Projects;
