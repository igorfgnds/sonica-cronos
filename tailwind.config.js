/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      sans: '"DM Sans"',
      display: '"Helvetica Neue"',
    },
    container: {
      center: true,
      screens: {
        xl: '1350px',
      },
    },
  },
  plugins: [],
};
