import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {AnchorLink} from 'gatsby-plugin-anchor-links';

const Intro = () => {
  return (
    <>
      <Fade triggerOnce>
        <div className='flex flex-col gap-5'>
          <p className='m-0'>Hi there! My name is</p>
          <h2 className='-my-0.5 md:m-0 text-7xl font-superbold leading-tight md:leading-none'>Ben Walters</h2>
          <p className='m-0'>I'm a <a href='https://linkedin.com/in/bpwalters' target='_blank' rel='noreferrer'>Software Engineer</a> at <a href='https://rarecandy.com' target='_blank' rel='noopener'>Rare Candy</a>, a team of nerds building the best way for other nerds to collect and share their passion of trading cards. 🍬</p>
          <p className='m-0'>I'm also a full-time dad, <a href='https://rarecandy.com/profile/bwalters?utm_source=Profile_Link&utm_medium=bwalters&utm_content=bwalters' target='_blank' rel='noopener'>nerd at heart</a>, and occasional <a href='https://benscarblog.com' target='_blank' rel='noopener'>car blogger</a>.</p>
          <p className='m-0'>If you have any questions about my <AnchorLink to='#projects'>projects</AnchorLink> or are interested in working together, please <AnchorLink to='#contact'>shoot me a message</AnchorLink>!</p>
        </div>
      </Fade>
    </>
  );
};

export default Intro;