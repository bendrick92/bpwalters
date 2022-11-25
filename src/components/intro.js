import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {AnchorLink} from 'gatsby-plugin-anchor-links';

const Intro = () => {
  return (
    <>
      <Fade>
        <div>
          <p>Hey there! My name is</p>
          <h2 className='mt-5 mb-8 text-7xl font-superbold'>Ben Walters</h2>
          <p>and I'm a <a href='https://linkedin.com/in/bpwalters' target='_blank' rel='noreferrer'><strong>Lead Software Engineer</strong></a> from Milwaukee, WI.</p>
          <p>I'm also a full-time dad, part time woodworker, and sometimes tinkerer - more on that down <AnchorLink to='#projects'>here</AnchorLink>.</p>
          <p>If you have questions about any of my work or just wanna chat, <AnchorLink to='#contact'>hit me up</AnchorLink>!</p>
        </div>
      </Fade>
    </>
  );
};

export default Intro;