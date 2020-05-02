import React from 'react';
import './Misc.css';

const Misc = () => {
  return (
    <>
      <div className='misc'>
        <div className='pointedDiv'>
          <h1>BLOG, COURSES, AND TUTORIALS</h1>
        </div>

        <section className='rowMisc'>
          <div className='blogMisc'>
            <h4>Recent Blog Posts</h4>
            <ul>
              <li>This is first blog post</li>
              <li>This is second blog post</li>
              <li>This is first blog post</li>
            </ul>
          </div>
          <div className='courseMisc'>
            <h4>Recent Courses and Tutorials</h4>
            <ul>
              <li>This is first tutorial</li>
              <li>This is second tutorial</li>
              <li>This is third tutorial</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}

export default Misc;
