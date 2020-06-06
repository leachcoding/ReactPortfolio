import React, {useState} from 'react';
import './Projects.css';

const Projects = () => {
  const [dayProject] = useState([
    {
      imgSrc: 'https://www.dropbox.com/s/r5hs9njsrobavf2/screencapture-localhost-3000-2020-06-04-15_16_52.png?raw=1',
      title: 'React Todo',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/6p46hl99bizzilr/sprint_auth.JPG?raw=1',
      title: 'Sprint Challenge Authentication',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/qtxom2wvnj58dcm/JavaScriptII.JPG?raw=1',
      title: 'JavaScript II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/xcgov54w7rv7af3/array_methods_callbacks.JPG?raw=1',
      title: 'Array Methods and Callbacks',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/qmaik914lpwxarw/screencapture-localhost-3000-2020-06-04-15_06_19.png?raw=1',
      title: 'NASA Photo of the Day',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/t00w5id6ufe7u7h/screencapture-file-C-Users-Jay-Documents-Lambda-Piano-QWERTY-index-html-2020-06-05-11_15_02.png?raw=1',
      title: 'Piano QWERTY',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/8amhiyjjofysnmd/screencapture-file-C-Users-Jay-Documents-Lambda-MyBookList-index-html-2020-06-05-13_38_03.png?raw=1',
      title: 'MyBookList',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/x1l576dx8byquca/node_db3.JPG?raw=1',
      title: 'Web DB III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/n3m8sh0g1l4tay7/JavaScriptIV.JPG?raw=1',
      title: 'JavaScript IV',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/nmguiroaq3o0eyd/JavaScriptIII.JPG?raw=1',
      title: 'JavaScript III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/ncbf7yrvlm3ems6/node_api3.JPG?raw=1',
      title: 'Node API III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/su206z4hudvkrcy/node_api2.JPG?raw=1',
      title: 'Node API II',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/u5i418b5bhxl2bx/node_api1.JPG?raw=1',
      title: 'Node API I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/x1l576dx8byquca/node_db3.JPG?raw=1',
      title: 'Web DB III',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/38wxz5qq6g7za7z/node_api_challenge.JPG?raw=1',
      title: 'Node API Challenge',
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
      title: 'Web DB IV',
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
      title: 'JavaScript I',
      link: 'https://www.github.com/leachcoding'
    },
    {
      imgSrc: 'https://via.placeholder.com/150',
      title: 'User Interface I',
      link: 'https://www.github.com/leachcoding'
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(10);

  // const paginationClickNext = () => {
  //   setCurrentPage(currentPage + 1);
  // }

  // const paginationClickPrev = () => {
  //   setCurrentPage(currentPage - 1)
  // }
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
            <polygon points='-10,100 100,100 100,0'/>
          </svg>
        </div>
        <div className='topRow'>
          <section className='projectCard projectCard1'>
            <img src={require('../images/project-1.png')} alt="Pokedex Project" />
            <div className='project1Info'>
              <h4>Pokedex - Frontend & Backend</h4>
              <h5>Tech Used</h5>
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
              <p>This is a solo project that was built in preparation to teach and showcase React for my students (and others who are interested). The frontend has a specific focus on state management with hooks and react-router. The backend was made with Node.js as a simple backpack inventory management system, as well as a favorites storage for your favorite pokemon. User login/registry is present with JWT Authentication. Pagination for the following -- pokemon, moves, items, types, abilities, locations, and machines. Search forms for the following -- pokemon, moves, items, types, abilities, locations, and machines.</p>
              <div className='projectLinks'>
                <a className='projectLink' href='https://github.com/leachcoding/PokedexReact'>Source Code</a>
                <a className='projectLink' href='https://nervous-brown-c1db21.netlify.app/'>Live Demo</a>
              </div>
            </div>
          </section>
          <section className='projectCard projectCard2'>
            <img src={require('../images/cryptoDatabase.JPG')} alt="Cryptozoology Database Schema" />
            <div className='project1Info'>
              <h4>Cryptozoology - Open Source Backend</h4>
              <h5>Tech Used</h5>
              <ul>
                <li>Python</li>
                <li>GeoJSON</li>
                <li>Brooklyn Integers</li>
              </ul>
              <p>This is a open source project created by <a className='srcLink' href='https://github.com/simonw'>Simon Willison</a>. I am personally extremely interested in the entire cryptozoologocal field, with a heavy focus in Bigfoot and other named unknown primate species. I was looking for a backend I could work with to make a front end cryptid application, and this was the best/only backend I could find with a dataset that I really enjoyed and could see the expansion of. I have been heavily involved in creature documentation, GeoJSON creation for individual cryptids, as well as dataset creation for individual creatures for this project, and couldn't be more proud to have found something I am so passionately interested in shared in earnest with others. This is my showcase piece I am most happy to display.</p>
              <div className='projectLinks'>
                <a className='projectLink' href='https://github.com/leachcoding/cryptozoology'>Source Code</a>
                <a className='projectLink' href='https://cryptids.datasettes.com/'>Live Demo</a>
              </div>
            </div>
          </section>
        </div>
        <div className='bottomRow'>
          <section className='projectCard projectCard3'>
            <img src={require('../images/get2it.png')} alt="Get 2 It Signup / Login Example" />
            <div className='project1Info'>
              <h4>Get2It - Frontend & Backend</h4>
              <h5>Tech Used</h5>
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
              <p>This is a Labs project in which me, and a team of 4 others, inherited a dashboard todo list application to update and improve upon. This is currently on its 1.3 release. I have been heavily involved in the backend, writing documentation, creating an entirely new user schema, categories table, and updated task list for the dashboard, with JWT Authentication for the login/registry, as well as regular changes to update ios/web integration. On the frontend, I have worked significantly on CSS redesigns to go upon our new Figma re-design.</p>
              <div className='projectLinks'>
                <a className='projectLink' href='https://github.com/orgs/Lambda-School-Labs/teams/labs-pt9-get2it/repositories'>Source Code</a>
                <a className='projectLink' href='https://master.d2aj6lilolim7e.amplifyapp.com/login'>Live Demo</a>
              </div>
            </div>
          </section>
          <section className='projectCard projectCard4'>
            <img src={require('../images/anytime-fitness.JPG')} alt="Anytime Fitness" />
            <div className='project1Info'>
              <h4>Anytime Fitness - Backend</h4>
              <h5>Tech Used</h5>
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
              <p>This is a project where me and a team worked to build a fitness application to create classes as instructors, and as clients, sign up for them using JWT Authentication. I built the entire backend for this application, creating users as instructors or clients, and an entire table for classes themselves, with a signup system using patch requests for the classes.</p>
              <div className='projectLinks'>
                <a className='projectLink' href='https://github.com/Build-Week-PT-Anytime-Fitness-1/Backend'>Source Code</a>
                <a className='projectLink' href='https://anywhere-fitness1.herokuapp.com/'>Live Demo</a>
              </div>
            </div>
          </section>
        </div>
        <section className="dayProjects">
          <h3>Daily Projects</h3>
          <p>These projects are projects that took more often than not just a day to complete, so keep that context in mind judging other important concepts like testing, CSS, responsive design, other browser compatability, etc. These projects were typically done to showcase, explain, or learn singular topics, and the work I think reflects that in their more simplistic scope.</p>
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
                  <img src={project.imgSrc} alt='Day Project'/>
                  <h6>{project.title}</h6>
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
