import React, {useState, useEffect} from 'react';
import githublogo from '../images/github.svg';
import linkedinlogo from '../images/linkedin.svg';
import twitterlogo from '../images/twitter.svg';
import './NavBar.css';

// Hook
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
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
  const size = useWindowSize();
  function openNav() {
    if(size.width > 500){
      document.getElementById("mySidenav").style.width = "20%";
      document.getElementById("hamburgerMain").style.marginRight = "25%";
    } else if (size.width < 501) {
      document.getElementById("mySidenav").style.width = "40%";
      document.getElementById("hamburgerMain").style.marginRight = "25%";
    }
  }
  function closeNav() {
    if(size.width > 500){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("hamburgerMain").style.marginRight= "0";
    } else if (size.width < 501) {
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("hamburgerMain").style.marginRight= "0";
    }
  }
  return (
    <div className='navigationMain'>
      <div id="mySidenav" className='navigation sidenav'>
          <a className="closebtn" onClick={closeNav}>&times;</a>
          <a className="navHome" href='/'>Jay Leach</a>
          <a className="navAbout" href='/#about'>About</a>
          <a className='navProject' href='/#projects'>Projects</a>
          <a className="navCourse" href='/#courses'>Courses/Tutorials</a>
          <a className="navBlog" href='http://leachcoding.wordpress.com'>Blog</a>

        <section className='socialMedia'>
          <p>leachcoding@gmail.com</p>
          <div className='socialIcons'>
            <a href='https://github.com/leachcoding'><img src={githublogo} alt='Github Logo - Link to profile' /></a>
            <a href='https://www.linkedin.com/in/jayleachcoding/'><img src={linkedinlogo} alt='LinkedIn Logo - Link to profile' /></a>
            <a href='https://twitter.com/leachcoding'><img src={twitterlogo} alt='Twitter Logo - Link to profile' /></a>
          </div>
          <a className='resume' href='https://resume.creddle.io/resume/at67sfqdqkm'>Resume</a>
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
