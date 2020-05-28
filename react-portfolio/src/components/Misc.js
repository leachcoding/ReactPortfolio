import React from 'react';
import './Misc.css';

const Misc = () => {
  return (
    <>
      <div id='courses'className='misc'>
        <div className='pointedDiv'>
          <h1>BLOG, COURSES, AND TUTORIALS</h1>
        </div>

        <section className='rowMisc'>
          <div className='blogMisc'>
            <h4>Recent Blog Posts</h4>
            <ul>
              <li><a href='https://leachcoding.wordpress.com/2020/05/27/my-time-at-lambda-so-far/'>My Time at Lambda So Far</a></li>
              <li><a href='https://leachcoding.wordpress.com/2020/05/26/my-first-blog-post-what-to-expect/'>My First Blog Post</a></li>
            </ul>
          </div>
          <div className='courseMisc'>
            <h4>Recent Courses and Tutorials</h4>
            <ul>
              <li><a href='https://github.com/leachcoding/JavaScriptFun'>JavaScript Tutorial</a></li>
              <li><a href='https://github.com/leachcoding/PokedexReact'>React Pokedex Tutorial</a></li>
              <li><a href='https://github.com/leachcoding/MirriamWebsterJS'>Merriam Webster Dictionary JavaScript</a></li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Misc;
