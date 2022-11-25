import React from 'react';
import {Fade} from 'react-awesome-reveal';

const Intro = () => {
  return (
    <>
      <Fade>
        <div>
          <h2>I'm Ben - A web developer from WI.</h2>
          <p>I currently work as a <strong>Lead Software Engineer</strong> at Milwaukee Tool.</p>
          <p>A few things I'm passionate about include clean design, creative problem solving, and cheese curds.</p>
          <p>I spend my free time making sawdust, changing diapers, and blogging over at <a href='https://benscarblog.com' target='_blank' rel='noreferrer'>Bens Car Blog</a>.</p>
        </div>
      </Fade>
    </>
  );
};

export default Intro;