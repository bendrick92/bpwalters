import React, {useEffect, useState} from 'react';
import {Transition} from '@headlessui/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBarsStaggered, faXmark} from '@fortawesome/free-solid-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import {useLocation} from '@reach/router';
import {StaticImage} from 'gatsby-plugin-image';

const Header = () => {
  const location = useLocation();
  const [showMobileNav, toggleMobileNav] = useState(false);

  useEffect(() => {
    toggleMobileNav(false);
  }, [location]);

  const desktopNavMarkup = (
    <nav className='hidden flex-row gap-8 md:flex'>
      <AnchorLink to='/#intro' className='text-slate-300 hover:text-white z-10'>About</AnchorLink>
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
        <button
          className='w-full h-screen fixed top-0 right-0 bg-black opacity-80 hover:cursor-pointer z-10'
          onClick={() => toggleMobileNav(!showMobileNav)}
        >
        </button>
      </Transition.Child>
      <Transition.Child
        as='div'
        enter='transform transition ease-in-out duration-500'
        enterFrom='translate-x-full opacity-0'
        enterTo='translate-x-0 opacity-full'
        leave='transform transition ease-in-out duration-500'
        leaveFrom='translate-x-0 opacity-full'
        leaveTo='translate-x-full opacity-0'
        className='w-auto h-screen fixed top-0 right-0 flex flex-col gap-3 items-end bg-zinc-800 z-30'
      >
        <FontAwesomeIcon
          icon={faXmark}
          size='2xl'
          className='px-8 py-6 hover:cursor-pointer'
          onClick={() => toggleMobileNav(!showMobileNav)}
        />
        <nav className='pr-8 pl-20 flex flex-col gap-6 items-end'>
          <AnchorLink to='/#intro' className='text-slate-300 hover:text-white z-10' onAnchorLinkClick={() => toggleMobileNav(!showMobileNav)}>About</AnchorLink>
          <AnchorLink to='/#projects' className='text-slate-300 hover:text-white z-10' onAnchorLinkClick={() => toggleMobileNav(!showMobileNav)}>Projects</AnchorLink>
          <AnchorLink to='/#blog' className='text-slate-300 hover:text-white z-10' onAnchorLinkClick={() => toggleMobileNav(!showMobileNav)}>Blog</AnchorLink>
          <a href='https://github.com/bendrick92' target='_blank' rel='noreferrer' className='text-slate-300 hover:text-white'>
            <FontAwesomeIcon icon={faGithub} size='xl' />
          </a>
        </nav>
      </Transition.Child>
    </Transition>
  );

  return (
    <>
      <header className='fixed top-0 right-0 left-0 bg-zinc-900/75 backdrop-blur-sm z-10 overflow-visible'>
        <div className='max-w-full md:max-w-5xl px-8 py-4 mx-auto flex items-center justify-between relative'>
          <a href='/' className='flex justify-start items-center lg:flex-1 no-underline'>
            <div className='px-1 pt-2 pb-0 mr-3 bg-blue-500 rounded-full overflow-hidden isolate'>
              <StaticImage
                src='../assets/images/bpwalters.png'
                alt=''
                width={30}
                height={30}
                loading='eager'
                placeholder='none'
              />
            </div>
          </a>
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
