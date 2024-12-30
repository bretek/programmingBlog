/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./programmingBlog/themes/myTheme/content/**/*.{html,js}", "./programmingBlog/themes/myTheme/layouts/**/*.{html,js}", "./programmingBlog/themes/myTheme/assets/css/**/*.css"],
  theme: {
    extend: {
      fontFamily : {
        'primary' : 'font-sans'
      },
      colors: {
        'carbon': {
          400: '#7a7b7c',
          700: '#262626',
          800: '#161616',
          900: '#0c0c0c',
        },
        'offwhite' : '#f2f4f8',
        'primary' : {
          500: '#78a9ff',
          700: '#8977ff',
        },
        'secondary': {
          500: '#c690ff',
        },
        'tertiary' : {
          500: '#00c260',
        }
      },
    },
  },
  plugins: [],
}

