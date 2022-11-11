import React from 'react';

const Header = () => {
  return (
    <>
      <link rel='stylesheet' href='https://rsms.me/inter/inter.css' />
      <header className='relative'>
        <div className='py-8 mx-auto flex items-center justify-between'>
          <div className='flex justify-start lg:flex-1'>
            <a href='/' className='no-underline'>
              <h1 className='text-xl font-semibold'>Ben Walters</h1>
            </a>
          </div>
          <nav className='hidden space-x-10 md:flex gap-3'>
            <a href='/#intro' className='text-slate-300 hover:text-white'>About Me</a>
            <a href='/#projects' className='text-slate-300 hover:text-white'>Projects</a>
            <a href='/#blog' className='text-slate-300 hover:text-white'>Blog</a>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
