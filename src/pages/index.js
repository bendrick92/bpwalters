import React from 'react';
import {Blog, Intro, Projects} from '../components';

const IndexPage = () => {
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