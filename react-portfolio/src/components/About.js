import React from 'react';
import './About.css';

const About = () => {
  let sequenceTextArr=['engineer', 'tinkerer', 'developer'];
  function textSequence(i) {
    if (sequenceTextArr.length > i) {
      setTimeout(function() {
          document.getElementById("sequenceText").innerHTML = sequenceTextArr[i];
          textSequence(++i);
      }, 1500); // 1.5 second (in milliseconds)

    } else if (sequenceTextArr.length === i) { // Loop
      textSequence(0);
    }
  }
  textSequence(0);
  return (
    <>
      <div id='about'className='about'>
        <div className='dripContainer'>
          <h1>ABOUT</h1>
          <svg className='drip' viewBox='0 0 1250 150' preserveAspectRatio='none'>
            <path className='dripPath1'fill='#d4e8e1' d='M 0 30 Q 15 0, 30 30 L 30 120 Q 45 150, 60 120 L 60 75 Q 75 45, 90 75 L 90 110 Q 105 140, 120 110 L 120, 30 Q 135 0 150 30 L 150 80 Q 165 110, 180 80 L 180 30 Q 195 0 210 30 L 210 120 Q 225 150, 240 120 L 240 100 Q 255 70, 270 100 Q 285 130, 300 100 L 300 30 Q 315 0, 330 30 L 330 45 Q 345 75, 360 45 Q 375 15, 390 45 L 390 115 Q 405 145, 420 115 L 420 60 Q 435 30, 450 60 L 450 90 Q 465 120, 480 90 L 480 80 Q 495 50, 510 80 L 510 120 Q 525 150, 540 120 L 540 30 Q 555 0, 570 30 Q 585 60, 600 30 Q 615 0, 630 30 L 630 75 Q 645 105, 660 75 L 660 50 Q 675 20, 690 50 L 690 120 Q 705 150, 720 120 L 720 30 Q 735 0, 750 30 L 750 115 Q 765 145, 780 115 L 780 100 Q 795 70, 810 100 Q 825 130, 840 100 L 840 40 Q 855 10, 870 40 Q 885 70, 900 40 Q 915 10, 930 40 L 930 80 Q 945 110, 960 80 L 960 30 Q 975 0, 990 30 L 990 120 Q 1005 150, 1020 120 Q 1035 90, 1050 120 Q 1065 150, 1080 120 L 1080 65 Q 1095 35, 1110 65 L 1110 110 Q 1125 140, 1140 110 L 1140 30 Q 1155 0, 1170 30 L 1170 95 Q 1185 125, 1200 95 L 1200 30Q 1215 0, 1230 30 Q 1245 60, 1260 30 L 1260 150 L 0 150 Z' />
          </svg>
        </div>

        <div className='aboutTop'>
          <img src={require('../images/me.jpg')} alt="Me - Jay Leach - in Savannah on the waterfront" />
          <div className='aboutText'>
            <p>Hey, I'm Jay, a(n) <span id="sequenceText">developer</span> in the Appalachian Mountains. I am currently a Team Lead for Lambda School.</p>
            <p>I'm obsessed with technology, passionate about clean, semantic code, out of the box thinking, and accessibility for all. As a developer always looking to learn, try new things, and push the boundaries of what I think capable,  I strive to be the best I can be and have my work reflect the passion I feel for software development.</p>
            <p>I<span role='img' alt='paint brush' aria-label='emoji'>🖌️</span> paint<span role='img' alt='paint brush emoji' aria-label='emoji'>🎨</span>, hike<span role='img' alt='hiker mountains' aria-label='emoji'>🚵‍♂️</span>, and<span role='img' alt='weight lifter emoji' aria-label='emoji'> 🏋️‍♂️</span>lift weights in the meantime, while also enjoying hanging out with my doggo, Scout<span role='img' alt='service dog emoji' aria-label='emoji'>🐕‍🦺</span>.</p>
          </div>
        </div>

        <svg className='animatedAngled' viewBox='0 0 300 100' preserveAspectRatio="none">
          <polygon className='animatedAngledPath' points='-15,20 -10,0 -5,20 0,0 5,20 10,0 15,20 20,0 25,20 30,0 35,20 40,0 45,20 50,0 55,20 60,0 65,20 70,0 75,20 80,0 85,20 90,0 95,20 100,0 105,20 110,0 115,20 120,0 125,20 130,0 135,20 140,0 145,20 150,0 155,20 160,0 165,20 170,0 175,20 180,0 185,20 190,0 195,20 200,0 205,20 210,0 215,20 220,0 225,20 230,0 235,20 240,0 245,20 250,0 255,20 260,0 265,20 270,0 275,20 280,0 285,20 290,0 295,20 300,0 305,20 310,0 310,25 0,25' />
          <polygon className='animatedAngledPathMed' points='-40,20 -30,0 -20,0 -10,20 0,0 10,20 20,0 30,20 40,0 50,20 60,0 70,20 80,0 90,20 100,0 110,20 120,0 130,20 140,0 150,20 160,0 170,20 180,0 190,20 200,0 210,20 220,0 230,20 240,0 250,20 260,0 270,20 280,0 290,20 300,0 310,20 320,0 320,35 0,35' />
        </svg>
      </div>
    </>
  )
}

export default About;
