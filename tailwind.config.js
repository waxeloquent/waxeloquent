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
    },
  },
  plugins: [],
}