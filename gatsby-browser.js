import './src/styles/global.css';
import React, {useEffect, useState} from 'react';
import { Layout } from './src/components';

export const SiteContext = React.createContext({});

export const wrapPageElement = ({ element, props }) => {
  return (
    <SiteContext.Provider value={{
      location: props.location
    }}>
      <Layout>
        {element}
      </Layout>
    </SiteContext.Provider>
  );
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: 'en',
    className: 'dark'
  });
};