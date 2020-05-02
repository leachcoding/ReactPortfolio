import React, {useState} from 'react';
import './Home.css';

const Home = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleClick = e =>{
    setOpen(!open);
  }
  const handleClick2 = e =>{
    setOpen2(!open2);
  }
  const handleClick3 = e =>{
    setOpen3(!open3);
  }
  const handleClick4 = e =>{
    setOpen4(!open4);
  }

  console.table(open, open2, open3, open4);
  return (
    <>
      <div className='homeContainer'>
        <div  className='home'>
          <p>Hi</p>
          <svg viewBox="0 0 300 100" preserveAspectRatio="none">
            <polygon fill='red' points='0,0 5,20 10,0 15,20 20,0 25,20 30,0 35,20 40,0 45,20 50,0 55,20 60,0 65,20 70,0 75,20 80,0 85,20 90,0 95,20 100,0 105,20 110,0 115,20 120,0 125,20 130,0 135,20 140,0 145,20 150,0 155,20 160,0 165,20 170,0 175,20 180,0 185,20 190,0 195,20 200,0 205,20 210,0 215,20 220,0 225,20 230,0 235,20 240,0 245,20 250,0 255,20 260,0 265,20 270,0 275,20 280,0 285,20 290,0 295,20 300,0 300,0 300,25 0,25' />
            {/*<polygon class="svg--sm" fill="yellow" points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"/>
            <polygon class="svg--lg" fill="yellow" points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100" />*/}
          </svg>
        </div>
        <div className='techSkewBox'>
          <p>Technology and Skills</p>
          <svg viewBox='0 0 100 100' preserveAspectRatio="none">
            <polygon fill='white' points='0,0 0,100 100,100' />
          </svg>
        </div>
        <div className='techLanguages'>
          <button onClick={handleClick}>Languages</button>
          { open && (
            <ul className='columnlist'>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Python</li>
              <li>SQL</li>
            </ul>
          )}
          <svg className='animatedAngled' viewBox='0 0 300 100' preserveAspectRatio="none">
            <polygon className='animatedAngledPath' points='0,0 5,20 10,0 15,20 20,0 25,20 30,0 35,20 40,0 45,20 50,0 55,20 60,0 65,20 70,0 75,20 80,0 85,20 90,0 95,20 100,0 105,20 110,0 115,20 120,0 125,20 130,0 135,20 140,0 145,20 150,0 155,20 160,0 165,20 170,0 175,20 180,0 185,20 190,0 195,20 200,0 205,20 210,0 215,20 220,0 225,20 230,0 235,20 240,0 245,20 250,0 255,20 260,0 265,20 270,0 275,20 280,0 285,20 290,0 295,20 300,0 305,20 310,0 310,25 0,25' />
          </svg>
        </div>
        <div className='techLibraries'>

          <button className="midButton" onClick={handleClick2}>Libraries Frameworks</button>

          {open2 && (
            <ul className='columnlist'>
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
          )}
          <svg className='animatedSquare' viewBox='0 0 100 100' preserveAspectRatio='none'>
            <polygon className='animatedSquarePath' points='-10,0 -10,20 -5,20 -5,0 0,0 0,20 5,20 5,0 10,0 10,20 15,20 15,0 20,0 20,20 25,20 25,0 30,0 30,20 35,20 35,0 40,0 40,20 45,20 45,0 50,0 50,20 55,20 55,0 60,0 60,20 65,20 65,0 70,0 70,20 75,20 75,0 80,0 80,20 85,20 85,0 90,0 90,20 95,20 95,0 100,0 100,20 105,20 105,0 110,0 0,0' />
          </svg>
        </div>
        <div className='techTools'>
          <button className="midButton" onClick={handleClick3}>Tools</button>
          {open3 && (
            <ul className='columnlist'>
              <li>Git</li>
              <li>Github</li>
              <li>Netlify</li>
              <li>Heroku</li>
              <li>Atom</li>
              <li>Gitbash</li>
              <li>Postman</li>
              <li>SQLiteStudio</li>
            </ul>
          )}
          <svg className='wavy' viewbox='0 0 600 100' preserveAspectRatio='none'>
            <path fill='white' d='M 0 30 Q 15 0, 30 30 Q 45 60, 60 30 Q 75 0, 90 30 Q 105 60, 120 30 Q 135 0, 150 30 Q 165 60, 180 30 Q 195 0, 210 30 Q 225 60, 240 30 Q 255 0, 270 30 Q 285 60, 300 30 Q 315 0 330 30 Q 345 60, 360 30 Q 375 0 390 30 Q 405 60, 420 30 Q 435 0 450 30 Q 465 60, 480 30 Q 495 0 510 30 Q 525 60, 540 30 Q 555 0 570 30 Q 585 60 600 30 Q 615 0 630 30 Q 645 60 660 30 L 660 100 L 0 100 Z' />
          </svg>
        </div>
        <div className='techOther'>
          <button onClick={handleClick4}>Other Skills</button>
          {open4 && (
            <ul className='columnlist'>
              <li>Object Oriented Programming</li>
              <li>Test Driven Development</li>
              <li>Pair Programming</li>
              <li>AGILE Development</li>
              <li>RESTful APIS</li>
              <li>Project Management</li>
            </ul>
          )}
          <svg viewBox='0 0 100 100' preserveAspectRatio="none">
            <polygon fill='blue' points='100,100 100,0 0,100' />
          </svg>
        </div>

      </div>
    </>
  )
}

export default Home;
