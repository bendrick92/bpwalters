import React from 'react';
import {Projects, Blog, Intro} from '../components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const IndexPage = () => {
  /*<img
    src='https://assets.bpwalters.com/images/me_wedding.jpg'
    alt='Ben Walters'
    className='w-40 rounded-full'
  />*/

  return (
    <div className='flex flex-col'>
      <section id='intro' className='min-h-screen prose-xl'>
        <Intro/>
      </section>
      <section id='projects' className='min-h-screen prose-xl'>
        <Projects/>
      </section>
      <section id='blog' className='min-h-screen prose-xl'>
        <Blog/>
      </section>
    </div>
  );
};

export default IndexPage;