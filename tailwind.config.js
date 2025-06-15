// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js}',
    //'./src/**/*.{html,js}',
    //'./components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#03588C',
        'uoc-masterbrand': '#A9CBB7',
        'uoc-bg': '#F2F2F2',
        'hover': '#D9A566',
      }
    },
  },
};
