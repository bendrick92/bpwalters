const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              padding: '.3em .5em',
              borderRadius: '.5em',
              backgroundColor: colors.slate['600'],
              color: colors.slate['100'],
              fontWeight: 600
            },
            code: {
              padding: '.3em .5em',
              borderRadius: '.5em',
              backgroundColor: colors.slate['600'],
              color: colors.slate['100'],
              fontWeight: 600
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'blockquote > p::before': {
                content: '""',
            },
            'blockquote > p::after': {
                content: '""',
            }
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class'
};
