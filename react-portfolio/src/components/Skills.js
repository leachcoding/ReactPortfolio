import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <div className='slantSkill'>
          <h1>SKILLS AND TECHNOLOGY</h1>
          <svg viewBox='0 0 100 100' preserveAspectRatio="none">
            <polygon points='0,0 100,100 0,100'/>
          </svg>
        </div>
        <section className='rowTech'>
          <div className='languages'>
            <h4>Languages</h4>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className='libraries'>
            <h4>Libraries/Frameworks</h4>
            <ul>
              <li>React.js</li>
              <li>Redux</li>
              <li>LESS</li>
              <li>SASS</li>
              <li>Styled-Components</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Knex.js</li>
              <li>bcrypt.js</li>
              <li>Jest</li>
              <li>Cypress</li>
            </ul>
          </div>

          <div className='tools'>
            <h4>Tools</h4>
            <ul>
              <li>Git</li>
              <li>Github</li>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>Atom</li>
              <li>Gitbash</li>
              <li>Postman</li>
              <li>SQLiteStudio</li>
            </ul>
          </div>

          <div className='relatedSkills'>
            <h4>Related Skills</h4>
            <ul>
              <li>Object Oriented Programming</li>
              <li>Test Driven Development</li>
              <li>Pair Programming</li>
              <li>AGILE Development</li>
              <li>RESTful APIS</li>
              <li>Project Management</li>
            </ul>
          </div>
        </section>
        <svg className='wavy' viewBox='0 0 1250 100' preserveAspectRatio='none'>
          <path fill='white' d='M 0 30 Q 15 0, 30 30 Q 45 60, 60 30 Q 75 0, 90 30 Q 105 60, 120 30 Q 135 0, 150 30 Q 165 60, 180 30 Q 195 0, 210 30 Q 225 60, 240 30 Q 255 0, 270 30 Q 285 60, 300 30 Q 315 0 330 30 Q 345 60, 360 30 Q 375 0 390 30 Q 405 60, 420 30 Q 435 0 450 30 Q 465 60, 480 30 Q 495 0 510 30 Q 525 60, 540 30 Q 555 0 570 30 Q 585 60 600 30 Q 615 0 630 30 Q 645 60 660 30 Q 675 0, 690 30 Q 705 60, 720 30 Q 735 0, 750 30 Q 765 60, 780 30 Q 795 0, 810 30 Q 825 60, 840 30 Q 855 0, 870 30 Q 885 60, 900 30 Q 915 0, 930 30 Q 945 60, 960 30 Q 975 0, 990 30 Q 1005 60, 1020 30 Q 1035 0, 1050 30 Q 1065 60, 1080 30 Q 1095 0, 1110 30 Q 1125 60, 1140 30 Q 1155 0, 1170 30 Q 1185 60, 1200 30 Q 1215 0, 1230 30 Q 1245 60, 1260 30 Q 1275 0, 1290 30 Q 1305 60, 1320 30 L 1330 100 L 0 100 Z' />
        </svg>
      </div>
    </>
  )
}

export default Skills;
