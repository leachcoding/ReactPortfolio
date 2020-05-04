import React from 'react';
import githublogo from '../images/github.svg';
import linkedinlogo from '../images/linkedin.svg';
import twitterlogo from '../images/twitter.svg';
import './NavBar.css';

function openNav() {
  document.getElementById("mySidenav").style.width = "20%";
  document.getElementById("hamburgerMain").style.marginRight = "25%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("hamburgerMain").style.marginRight= "0";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("hamburgerMain").style.opacity = "0.2";
  } else {
    document.getElementById("hamburgerMain").style.opacity = "1";
  }
}

const NavBar = () => {
  return (
    <div className='navigationMain'>
      <div id="mySidenav" className='navigation sidenav'>
          <a className="closebtn" onClick={closeNav}>&times;</a>
          <a className="navHome" href='/'>Jay Leach</a>
          <a className="navAbout" href=''>About</a>
          <a className='navProject' href='/#projects'>Projects</a>
          <a className="navCourse" href=''>Courses/Tutorials</a>
          <a className="navBlog" href=''>Blog</a>

        <section className='socialMedia'>
          <p>leachcoding@gmail.com</p>
          <div className='socialIcons'>
            <a href='https://github.com/leachcoding'><img src={githublogo} alt='Github Logo - Link to profile' /></a>
            <a href='https://www.linkedin.com/in/jayleachcoding/'><img src={linkedinlogo} alt='LinkedIn Logo - Link to profile' /></a>
            <a href='https://twitter.com/leachcoding'><img src={twitterlogo} alt='Twitter Logo - Link to profile' /></a>
          </div>
          <a href=''>Resume</a>
        </section>
      </div>

      <div id='hamburgerMain' onClick={openNav}>
        <div className='hamburgerBar'></div>
        <div className='hamburgerBar'></div>
        <div className='hamburgerBar'></div>
      </div>

      <div id='topScroll'>
        <a href='/#'>^</a>
      </div>
    </div>
  )
}

export default NavBar;
