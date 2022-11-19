import React, {useContext, useEffect, useState} from 'react';
import {SiteContext} from '../../gatsby-browser';
import {Transition} from '@headlessui/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {AnchorLink} from 'gatsby-plugin-anchor-links';

const Header = () => {
  const { location } = useContext(SiteContext);

  const [showMobileNav, toggleMobileNav] = useState(false);

  useEffect(() => {
    toggleMobileNav(false);
  }, [location]);

  const desktopNavMarkup = (
    <nav className='hidden flex-row gap-8 md:flex'>
      <AnchorLink to='/#intro' className='text-slate-300 hover:text-white z-10'>About Me</AnchorLink>
      <AnchorLink to='/#projects' className='text-slate-300 hover:text-white z-10'>Projects</AnchorLink>
      <AnchorLink to='/#blog' className='text-slate-300 hover:text-white z-10'>Blog</AnchorLink>
      <a href='https://github.com/bendrick92' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-white'>
        <FontAwesomeIcon icon={faGithub} size='xl' />
      </a>
    </nav>
  );

  const mobileNavMarkup = (
    <Transition show={showMobileNav}>
      <Transition.Child
        enter='ease-in-out duration-500'
        enterFrom='opacity-0'
        enterTo='opacity-full'
        leave='ease-in-out duration-500'
        leaveFrom='opacity-full'
        leaveTo='opacity-0'
      >
        <div
          className='w-full h-full fixed top-0 right-0 bg-black opacity-80 hover:cursor-pointer z-10'
          onClick={() => toggleMobileNav(!showMobileNav)}
        >
        </div>
      </Transition.Child>
      <Transition.Child
        as='div'
        enter='transform transition ease-in-out duration-500'
        enterFrom='translate-x-full opacity-0'
        enterTo='translate-x-0 opacity-full'
        leave='transform transition ease-in-out duration-500'
        leaveFrom='translate-x-0 opacity-full'
        leaveTo='translate-x-full opacity-0'
        className='w-auto h-full fixed top-0 right-0 flex flex-col items-end bg-slate-800 z-20'
      >
        <FontAwesomeIcon
          icon={faXmark}
          size='2xl'
          className='px-8 py-10 hover:cursor-pointer'
          onClick={() => toggleMobileNav(!showMobileNav)}
        />
        <nav className='px-8 flex flex-col gap-6 items-end'>
          <a href='/#intro' className='text-slate-300 text-xl hover:text-white z-10'>About Me</a>
          <a href='/#projects' className='text-slate-300 text-xl hover:text-white z-10'>Projects</a>
          <a href='/#blog' className='text-slate-300 text-xl hover:text-white z-10'>Blog</a>
        </nav>
      </Transition.Child>
    </Transition>
  );

  return (
    <>
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      <header className='relative'>
        <div className='py-8 mx-auto flex items-center justify-between relative'>
          <div className='flex justify-start lg:flex-1'>
            <a href='/' className='no-underline'>
              <h1 className='text-xl font-semibold'>Ben Walters</h1>
            </a>
          </div>
          <FontAwesomeIcon
            icon={faBarsStaggered}
            size='xl'
            className='py-2 md:hidden hover:cursor-pointer'
            onClick={() => toggleMobileNav(!showMobileNav)}
          />
          {desktopNavMarkup}
        </div>
        {mobileNavMarkup}
      </header>
    </>
  );
};

export default Header;
