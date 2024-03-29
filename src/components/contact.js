import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import Button from './button';

const Contact = () => {
  return (
    <Fade triggerOnce>
      <div className='max-w-2xl mx-auto'>
        <h2>Lets chat!</h2>
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
              placeholder='you@email.com'
              required
              className='block rounded-md bg-black text-zinc-100 border-transparent focus:bg-white focus:text-zinc-500 focus:border-none'
            />
            <textarea
              id='message'
              name='message'
              placeholder={`What's on your mind?`}
              required
              rows={5}
              className='block rounded-md bg-black text-zinc-100 border-transparent focus:bg-white focus:text-zinc-500 focus:border-none'
            />
            <div className='flex justify-end'>
              <Button
                type='submit'
              >
                <FontAwesomeIcon icon={faPaperPlane} className='mr-3'/>
                Send
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Fade>
  );
};

export default Contact;