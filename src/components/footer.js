import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='py-20 flex justify-center'>
      <div className='flex justify-end gap-8'>
        <a href='https://www.linkedin.com/in/ben-walters-89846a66/' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-white'>
          <FontAwesomeIcon icon={faLinkedin} size='2xl' />
        </a>
        <a href='mailto:contact@bpwalters.com' className='text-slate-300 hover:text-white'>
          <FontAwesomeIcon icon={faEnvelope} size='2xl' />
        </a>
        <a href='https://github.com/bendrick92' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-white'>
          <FontAwesomeIcon icon={faGithub} size='2xl' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
