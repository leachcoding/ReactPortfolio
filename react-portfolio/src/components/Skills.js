import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <h1>SKILLS AND TECHNOLOGY</h1>
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
      </div>
    </>
  )
}

export default Skills;
