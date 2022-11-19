import React, {useEffect} from 'react';
import Header from './header';
import Footer from './footer';
import Contact from './contact';

/* FontAwesome */
import {library} from '@fortawesome/fontawesome-svg-core'
import {faGauge, faCarSide, faCat, faMagnifyingGlass, faComments, faPen, faArrowRight} from '@fortawesome/free-solid-svg-icons'

/* FontAwesome */
library.add(faGauge, faCarSide, faCat, faMagnifyingGlass, faComments, faPen, faArrowRight);

const Layout = ({ children }) => {
  return (
    <div id='page-wrapper' className='min-h-full bg-slate-900 text-white flex'>
      <div id='page-content' className='max-w-5xl px-8 mx-auto grow flex flex-col'>
        <Header/>
        <main className='min-w-full w-full grow prose prose-slate dark:prose-invert'>
          {children}
        </main>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
