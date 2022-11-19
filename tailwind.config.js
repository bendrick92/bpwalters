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
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-10deg)'
          },
          '50%': {
            transform: 'rotate(10deg)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle .25s ease-in-out 0s 5',
        'fade-in-up': 'fade-in-up .5s ease-in-out'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animation-delay')
  ],
  darkMode: 'class'
};
