import React from 'react';
import {Blog, Contact, Intro, Projects} from '../components';

const IndexPage = () => {
  return (
    <div className='flex flex-col gap-24 md:gap-36'>
      <section id='intro' className='prose-xl'>
        <Intro/>
      </section>
      <section id='projects' className='prose-xl'>
        <Projects/>
      </section>
      <section id='blog' className='prose-xl'>
        <Blog/>
      </section>
      <section id='contact' className='prose-xl'>
        <Contact/>
      </section>
    </div>
  );
};

export default IndexPage;