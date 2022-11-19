import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <a href='mailto:contact@bpwalters.com'>
      <FontAwesomeIcon
        icon={faEnvelope}
        size='xl'
        className='p-3 md:p-5 fixed right-5 md:right-20 bottom-10 rounded-full text-slate-300 hover:text-white bg-slate-600 hover:bg-slate-500 transition ease-in-out hover:-translate-y-1 hover:scale-110'
      />
    </a>
  );
};

export default Contact;