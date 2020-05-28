import React, {useState, useEffect} from 'react';
import './Projects.css';

const Projects = () => {
  const [dayProject, setDayProject] = useState([
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'NASA Photo of the Day',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Insta Clone',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'React American Football Scoreboard',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript Arrays Objects',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript Prototype',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript Classes',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript Foundations',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Array Methods and Callbacks',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint User Interface',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint State Management Smurfs',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'React Bubbles',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Auth Friends',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Car Sales',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Team Builder',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'React Router Movies',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Git Flow Practice',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint Challenge Single Page Applications',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'React Router Basic Nav',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint Challenge Applied JavaScript',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'DOM I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'DOM II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Newfeed Components',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint Advanced CSS',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Preprocessing I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Preprocessing II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Responsive Web Design',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'UI III Flexbox',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Reducer Todo',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'React Shopping Cart',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint Challenge Advanced React',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Dark Mode',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'React Github User Card',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'React Todo',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Cypress Testing',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint JavaScript',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript Closures Callbacks and Array Methods',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint Challenge Authentication',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node DB Challenge',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node Server Testing Challenge',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node Auth III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node Auth II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node Auth I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node API Challenge',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Web DB IV',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Web DB III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Web DB II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Web DB I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node API IV',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node API III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node API II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Node API I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint React Wars',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Web Application Testing',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'HTTP Movies Assignment',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Sprint User Interface',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'waterMyPlants',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Github UserCard JS',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript IV',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'JavaScript I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'Piano QWERTY',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'MyBookList',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'User Interface I',
      link: 'https://www.github.com/leachcoding'
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage, setProjectsPerPage] = useState(15);

  const paginationClickNext = () => {
    setCurrentPage(currentPage + 1);
  }

  const paginationClickPrev = () => {
    setCurrentPage(currentPage - 1)
  }
  // Logic for displaying current projects
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = dayProject.slice(indexOfFirstProject, indexOfLastProject);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(dayProject.length / projectsPerPage); i++) {
      pageNumbers.push(i);
  }

  console.log(pageNumbers);

  return (
    <>
      <div id='projects'className='projects'>
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
            <img src={require('../images/cryptoDatabase.JPG')} alt="Pokedex Project" />
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
            <img src={require('../images/anytime-fitness.JPG')} alt="Pokedex Project" />
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
        <section className="dayProjects">
          <h3>Daily Projects</h3>
          <p>Please keep in mind these projects are projects that took more often than not just a day to complete, so keep that context in mind judging other important concepts like testing, CSS, responsive design, other browser compatability, etc. These projects were typically done to showcase, explain, or learn singular topics, and the work I think reflects that in their more simplistic scope.</p>
          <div className="numRow">
            {pageNumbers.map(number => {
              return (
                <button onClick={() => setCurrentPage(number)}>{number}</button>
              )
            })}
          </div>
          <section className='dayProjectsList'>
            {currentProjects.map(project => {
              return(
                <div className='dayProjectCard'>
                  <img src={project.imgSrc} />
                  <h5>{project.title}</h5>
                </div>
              )
            })}
          </section>
          <div className="numRow">
            {pageNumbers.map(number => {
              return (
                <button onClick={() => setCurrentPage(number)}>{number}</button>
              )
            })}
          </div>
        </section>
        <svg className='animatedSquare' viewBox='0 0 100 100' preserveAspectRatio='none'>
          <polygon className='animatedSquarePath' points='-10,0 -10,20 -5,20 -5,0 0,0 0,20 5,20 5,0 10,0 10,20 15,20 15,0 20,0 20,20 25,20 25,0 30,0 30,20 35,20 35,0 40,0 40,20 45,20 45,0 50,0 50,20 55,20 55,0 60,0 60,20 65,20 65,0 70,0 70,20 75,20 75,0 80,0 80,20 85,20 85,0 90,0 90,20 95,20 95,0 100,0 100,20 105,20 105,0 110,0 0,0' />
        </svg>
      </div>
    </>
  );
}

export default Projects;
