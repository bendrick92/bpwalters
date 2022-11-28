import React from 'react';
import Header from './header';
import Footer from './footer';
import SEO from './seo';

/* FontAwesome */
import {library} from '@fortawesome/fontawesome-svg-core'
import {
  faArrowRight,
  faCarSide,
  faCat,
  faComments,
  faGauge,
  faGolfBallTee,
  faMagnifyingGlass,
  faPen
} from '@fortawesome/free-solid-svg-icons'

/* FontAwesome */
library.add(faGauge, faCarSide, faCat, faMagnifyingGlass, faComments, faPen, faArrowRight, faGolfBallTee);

const Layout = ({ children }) => {
  return (
    <>
      <SEO/>
      <div id='page-wrapper' className='min-h-full pt-40 bg-zinc-900 text-white flex'>
        <div id='page-content' className='max-w-full md:max-w-5xl px-8 mx-auto grow flex flex-col'>
          <Header/>
          <main className='min-w-full w-full grow prose prose-slate dark:prose-invert'>
            {children}
          </main>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Layout;
