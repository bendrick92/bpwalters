const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,md}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3': {
              fontWeight: 700
            },
            pre: {
              padding: '.3em .5em',
              borderRadius: '.5em',
              backgroundColor: colors.zinc['600'],
              color: colors.zinc['100'],
              fontWeight: 400
            },
            code: {
              padding: '.3em .5em',
              borderRadius: '.5em',
              backgroundColor: colors.zinc['600'],
              color: colors.zinc['100'],
              fontWeight: 400
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
            },
            a: {
              color: colors.blue['400'],
              textDecoration: 'none',
            },
            'a:hover': {
              textDecoration: 'underline',
            }
          }
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animation-delay'),
    require('@tailwindcss/forms')
  ],
  darkMode: 'class'
};
