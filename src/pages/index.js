import React from 'react';
import {Projects, Blog} from '../components';

const IndexPage = () => {
  /*<img
    src='https://assets.bpwalters.com/images/me_wedding.jpg'
    alt='Ben Walters'
    className='w-40 rounded-full'
  />*/

  return (
    <div className='flex flex-col space-y-10'>
      <section id='intro' className="prose-xl">
        <h2>Hi there, I'm Ben! 👋</h2>
        <p>I'm a web developer from Milwaukee, Wisconsin.</p>
        <p>I am currently a <span className="text-teal-500">Lead Software Engineer</span> with Milwaukee Tool, but over the past 10 years I've worked with/for companies in the education, healthcare, and manufacturing industries.</p>
        <p>When I'm not working, I'm usually making sawdust in the workshop, figuring out parenting, or blogging over at <a href='https://benscarblog.com' target='_blank' rel='noreferrer'>Bens Car Blog</a>!</p>
        <p>If you have any questions about my projects or are interested in working together, feel free to <a href='mailto:contact@bpwalters.com'>shoot me an email</a>!</p>
      </section>
      <section id='projects' className='prose-xl'>
        <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-500'>Projects</h2>
        <Projects/>
      </section>
      <section id='blog' className='prose-xl'>
        <h2 className='text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-500'>Blog</h2>
        <Blog/>
      </section>
    </div>
  );
};

export default IndexPage;