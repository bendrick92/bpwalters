import './src/styles/global.css';
import React from 'react';
import {Layout} from './src/components';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

export const wrapPageElement = ({ element }) => {
  return (
    <Layout>
      {element}
    </Layout>
  );
};