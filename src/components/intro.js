import React from 'react';
import Fade from 'react-reveal/Fade';
import {AnchorLink} from 'gatsby-plugin-anchor-links';

const Intro = () => {
  return (
    <>
      <Fade>
        <div className='mt-20 mb-10 flex flex-row'>
          <h2 className='m-0 text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-blue-500'>
            Hi there, I'm Ben!
          </h2>
          <h2 className='m-0 ml-2 animate-wiggle animation-delay-500'>
            👋
          </h2>
        </div>
      </Fade>
      <Fade>
        <div>
          <p>I'm a web developer from Milwaukee, Wisconsin.</p>
          <p>Currently I'm working as a <span className="text-teal-500">Lead Software Engineer</span> at Milwaukee Tool, but over the past 10 years I've worked with and for companies in the non-profit, education, healthcare, and manufacturing industries.</p>
          <p>When I'm not at my desk I'm usually making sawdust in the workshop, changing diapers, or blogging over at <a href='https://benscarblog.com' target='_blank' rel='noreferrer'>Bens Car Blog</a>!</p>
          <p>If you have any questions about my <AnchorLink to='#projects'>projects</AnchorLink> or would like to work together, find me on <a href='https://github.com/bendrick92' target='_blank' rel='noreferrer'>Github</a> or <a href='mailto:contact@bpwalters.com'>shoot me an email</a>!</p>
        </div>
      </Fade>
    </>
  );
};

export default Intro;