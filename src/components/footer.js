import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='py-20 flex flex-col gap-8'>
      <p className='text-center'>
        <FontAwesomeIcon icon={faCopyright} className='mr-1'/>
        {new Date().getFullYear()} Ben Walters
      </p>
      <div className='flex justify-center gap-7'>
        <a href='https://github.com/bendrick92' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-white'>
          <FontAwesomeIcon icon={faGithub} size='xl' />
        </a>
        <a href='mailto:contact@bpwalters.com' className='text-slate-300 hover:text-white'>
          <FontAwesomeIcon icon={faEnvelope} size='xl' />
        </a>
        <a href='https://www.linkedin.com/in/bpwalters/' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-white'>
          <FontAwesomeIcon icon={faLinkedin} size='xl' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
