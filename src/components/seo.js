import React from 'react';
import {useSiteMetadata} from '../hooks';

const SEO = ({ children }) => {
  const { title, description, image } = useSiteMetadata();

  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description}/>
      <meta name='image' content={image}/>
      {children}
    </>
  );
};

export default SEO;