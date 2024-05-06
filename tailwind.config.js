/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883',
        },
      },
      fontFamily: {
        primary: ['"Nunito"'],
      },
    },
  },
  plugins: [],
};
