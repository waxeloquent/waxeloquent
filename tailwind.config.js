/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5e548e',
        secondary: '#9f86c0',
        accent: '#be95c4',
        dark: '#231942',
        light: '#f4f1f9',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Source Sans Pro"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#5e548e',
              '&:hover': {
                color: '#9f86c0',
              },
            },
            h1: {
              fontFamily: ['"Playfair Display"', 'serif'].join(', '),
              color: '#231942',
            },
            h2: {
              fontFamily: ['"Playfair Display"', 'serif'].join(', '),
              color: '#231942',
            },
            h3: {
              fontFamily: ['"Playfair Display"', 'serif'].join(', '),
              color: '#231942',
            },
            h4: {
              fontFamily: ['"Playfair Display"', 'serif'].join(', '),
              color: '#231942',
            },
            blockquote: {
              borderLeftColor: '#be95c4',
            },
            strong: {
              color: '#231942',
            },
            code: {
              color: '#5e548e',
            },
            pre: {
              backgroundColor: '#f4f1f9',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}