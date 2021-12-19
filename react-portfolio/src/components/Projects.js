import React, {useState} from 'react';
import './Projects.css';

const Projects = () => {
  const [dayProject] = useState([
    {
      imgSrc: 'https://www.dropbox.com/s/xgttq6dn8151cfp/screencapture-localhost-3000-character-2020-06-08-12_35_09.png?raw=1',
      title: 'Sprint Challenge Single Page Applications',
      link: 'https://github.com/leachcoding/Sprint-Challenge-Single-Page-Apps'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/vgyiv9q7mj0d5xj/screencapture-localhost-3000-2020-06-08-12_22_02.png?raw=1',
      title: 'React Shopping Cart',
      link: 'https://github.com/leachcoding/react-shopping-cart'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/qr9hilz1vya20jj/screencapture-localhost-3000-2020-06-07-22_03_32%20%281%29.png?raw=1',
      title: 'React American Football Scoreboard',
      link: 'https://github.com/leachcoding/American-Football-Scoreboard'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/eueqmu7ufck81w2/screencapture-localhost-3000-2020-06-08-11_07_12.png?raw=1',
      title: 'Insta Clone',
      link: 'https://github.com/leachcoding/React-Components-Insta-Clone'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/8amhiyjjofysnmd/screencapture-file-C-Users-Jay-Documents-Lambda-MyBookList-index-html-2020-06-05-13_38_03.png?raw=1',
      title: 'MyBookList',
      link: 'https://github.com/leachcoding/MyBookList'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/2p7d39tjeijhdn9/screencapture-file-C-Users-Jay-Documents-Lambda-waterMyplants-home-html-2020-06-07-20_49_33.png?raw=1',
      title: 'waterMyPlants',
      link: 'https://github.com/leachcoding/waterMyplants'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/r5hs9njsrobavf2/screencapture-localhost-3000-2020-06-04-15_16_52.png?raw=1',
      title: 'React Todo',
      link: 'https://github.com/leachcoding/React-Todo'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/q64w97otplqq3k7/screencapture-localhost-3000-friendslist-2020-06-08-11_02_52%20%281%29.png?raw=1',
      title: 'Dark Mode',
      link: 'https://github.com/leachcoding/dark-mode'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/5wlf1hpdmql8d9s/screencapture-localhost-3000-2020-06-07-21_50_30.png?raw=1',
      title: 'HTTP Movies Assignment',
      link: 'https://github.com/leachcoding/HTTP-Movies-Assignment'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/gbfp0ckputwseyc/screencapture-localhost-3000-friendslist-2020-06-07-22_15_13%20%282%29.png?raw=1',
      title: 'Auth Friends',
      link: 'https://github.com/leachcoding/Auth-Friends'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/h2ccs44s6gjprgk/screencapture-localhost-3000-friendslist-2020-06-08-10_39_43.png?raw=1',
      title: 'Car Sales',
      link: 'https://github.com/leachcoding/Car-Sales'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/ywm33ro1o0u714t/JavaScriptI.JPG?raw=1',
      title: 'JavaScript I',
      link: 'https://github.com/leachcoding/JavaScript-I'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/rh4qrkbpc65oy5k/screencapture-file-C-Users-Jay-Documents-Lambda-Sprint-Challenge-Applied-Javascript-index-html-2020-06-07-20_49_58.png?raw=1',
      title: 'Sprint Challenge Applied JavaScript',
      link: 'https://github.com/leachcoding/Sprint-Challenge-Applied-Javascript'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/q2xyweqetcxx5us/screencapture-file-C-Users-Jay-Documents-Lambda-Preprocessing-II-index-html-2020-06-07-20_50_02.png?raw=1',
      title: 'Preprocessing II',
      link: 'https://github.com/leachcoding/Preprocessing-II'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/qmaik914lpwxarw/screencapture-localhost-3000-2020-06-04-15_06_19.png?raw=1',
      title: 'NASA Photo of the Day',
      link: 'https://github.com/leachcoding/nasa-photo-of-the-day'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/t00w5id6ufe7u7h/screencapture-file-C-Users-Jay-Documents-Lambda-Piano-QWERTY-index-html-2020-06-05-11_15_02.png?raw=1',
      title: 'Piano QWERTY',
      link: 'https://github.com/leachcoding/Piano-QWERTY'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/l00kgb3es74ysmo/screencapture-file-C-Users-Jay-Documents-Lambda-UI-III-Flexbox-great-idea-index-html-2020-06-07-20_49_48.png?raw=1',
      title: 'UI III Flexbox',
      link: 'https://github.com/leachcoding/UI-III-Flexbox'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/n3v6yzs5j2nc2b6/screencapture-file-C-Users-Jay-Documents-Lambda-Sprint-Challenge-User-Interface-index-html-2020-06-07-20_49_53.png?raw=1',
      title: 'Sprint User Interface',
      link: 'https://github.com/leachcoding/Sprint-Challenge--User-Interface'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/ac086vki6ky7oal/screencapture-file-C-Users-Jay-Documents-Lambda-Preprocessing-I-index-html-2020-06-07-20_50_06.png?raw=1',
      title: 'Preprocessing I',
      link: 'https://github.com/leachcoding/Preprocessing-I'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/6p46hl99bizzilr/sprint_auth.JPG?raw=1',
      title: 'Sprint Challenge Authentication',
      link: 'https://github.com/leachcoding/Sprint-Challenge-Authentication'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/qtxom2wvnj58dcm/JavaScriptII.JPG?raw=1',
      title: 'JavaScript II',
      link: 'https://github.com/leachcoding/JavaScript-II'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/xcgov54w7rv7af3/array_methods_callbacks.JPG?raw=1',
      title: 'Array Methods and Callbacks',
      link: 'https://github.com/leachcoding/Array-Methods-and-Callbacks'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/x1l576dx8byquca/node_db3.JPG?raw=1',
      title: 'Web DB III',
      link: 'https://github.com/leachcoding/node-db3-project?organization=leachcoding&organization=leachcoding'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/n3m8sh0g1l4tay7/JavaScriptIV.JPG?raw=1',
      title: 'JavaScript IV',
      link: 'https://github.com/leachcoding/JavaScript-IV'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/nmguiroaq3o0eyd/JavaScriptIII.JPG?raw=1',
      title: 'JavaScript III',
      link: 'https://github.com/leachcoding/JavaScript-III'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/ncbf7yrvlm3ems6/node_api3.JPG?raw=1',
      title: 'Node API III',
      link: 'https://github.com/leachcoding/node-api3-project'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/su206z4hudvkrcy/node_api2.JPG?raw=1',
      title: 'Node API II',
      link: 'https://github.com/leachcoding/node-api2-project'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/u5i418b5bhxl2bx/node_api1.JPG?raw=1',
      title: 'Node API I',
      link: 'https://github.com/leachcoding/node-api1-project'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/x1l576dx8byquca/node_db3.JPG?raw=1',
      title: 'Web DB III',
      link: 'https://github.com/leachcoding/node-db3-project'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/38wxz5qq6g7za7z/node_api_challenge.JPG?raw=1',
      title: 'Node API Challenge',
      link: 'https://github.com/leachcoding/node-api-challenge'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/6ac6gkjakzc4tli/screencapture-localhost-3000-2020-06-08-13_21_13.png?raw=1',
      title: 'Team Builder',
      link: 'https://github.com/leachcoding/team-builder'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/5wlf1hpdmql8d9s/screencapture-localhost-3000-2020-06-07-21_50_30.png?raw=1',
      title: 'React Router Movies',
      link: 'https://github.com/leachcoding/React-Router-Movies'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/aefmp4tmvg6rld5/screencapture-file-C-Users-Jay-Documents-Lambda-DOM-I-index-html-2020-06-08-12_27_27.png?raw=1',
      title: 'DOM I',
      link: 'https://github.com/leachcoding/DOM-I'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/42mywnzupmwvy26/screencapture-file-C-Users-Jay-Documents-Lambda-DOM-II-index-html-2020-06-08-12_27_20.png?raw=1',
      title: 'DOM II',
      link: 'https://github.com/leachcoding/DOM-II'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/sll6qk3yp0sp6pc/screencapture-localhost-3000-character-2020-06-08-12_37_04.png?raw=1',
      title: 'Reducer Todo',
      link: 'https://github.com/leachcoding/reducer-todo'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/njklxkgg353f1ud/screencapture-localhost-3000-2020-06-08-12_25_03.png?raw=1',
      title: 'React Github User Card',
      link: 'https://github.com/leachcoding/React-Github-User-Card'
    },
    {
      imgSrc: 'https://www.dropbox.com/s/77p8gg5q2q2j5lm/screencapture-localhost-3000-character-2020-06-08-12_44_34.png?raw=1',
      title: 'Sprint React Wars',
      link: 'https://github.com/leachcoding/Sprint-Challenge-React-Wars'
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6);

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
        </div>
        <svg className='animatedSquare' viewBox='0 0 100 100' preserveAspectRatio='none'>
          <polygon className='animatedSquarePath' points='-10,0 -10,20 -5,20 -5,0 0,0 0,20 5,20 5,0 10,0 10,20 15,20 15,0 20,0 20,20 25,20 25,0 30,0 30,20 35,20 35,0 40,0 40,20 45,20 45,0 50,0 50,20 55,20 55,0 60,0 60,20 65,20 65,0 70,0 70,20 75,20 75,0 80,0 80,20 85,20 85,0 90,0 90,20 95,20 95,0 100,0 100,20 105,20 105,0 110,0 0,0' />
        </svg>
      </div>
    </>
  );
}

export default Projects;
