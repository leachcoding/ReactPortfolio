import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <p>COPYRIGHT &copy; 2020 JAY LEACH</p>
        <div className='footerSocial'>
          <a href='https://github.com/leachcoding'>GITHUB</a>
          <a href='https://www.linkedin.com/in/jayleachcoding/'>LINKEDIN</a>
          <a href='https://twitter.com/leachcoding'>TWITTER</a>
        </div>
        <a href='#'> ^ To Top </a>
      </div>
    </>
  );
}

export default Footer;
