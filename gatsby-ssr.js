import React from 'react';
import { Layout } from './src/components';

export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout>{element}</Layout>
  );
};

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: 'en',
    className: 'dark'
  });
};