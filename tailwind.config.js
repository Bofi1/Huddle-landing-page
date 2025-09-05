/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        desktop: "1000px",
      },
      fontFamily: {
        OpenSans: ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
