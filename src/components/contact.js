import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <Fade>
      <div className='max-w-2xl mx-auto'>
        <h2>Have a question? Let's chat.</h2>
        <form
          method='post'
          action='https://formspree.io/f/mnqryjqb'
          className='mt-10'
        >
          <div className='grid grid-cols-1 gap-6'>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='bender.rodriguez@planetexpress.com'
              required
              className='block rounded-md bg-black text-white border-transparent focus:bg-white focus:text-slate-500'
            />
            <textarea
              id='message'
              name='message'
              placeholder='Your message here'
              required
              rows={5}
              className='block rounded-md bg-black text-white border-transparent focus:bg-white focus:text-slate-500'
            />
            <div className='flex justify-end'>
              <button
                type='submit'
                className='inline-block px-5 py-3 bg-slate-600 hover:bg-slate-500 text-slate-200 rounded-3xl text-sm'
              >
                <FontAwesomeIcon icon={faPaperPlane} size='middle' className='mr-3'/>
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Contact;