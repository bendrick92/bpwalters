import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheese, faHeart} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className='py-20 flex flex-col gap-10'>
      <div className='mx-auto flex flex-row gap-2 items-center'>
        <span>Made with</span>
        <FontAwesomeIcon icon={faCheese} className='text-yellow-400'/>
        <span>&</span>
        <FontAwesomeIcon icon={faHeart} className='text-red-600'/>
      </div>
    </footer>
  );
};

export default Footer;
