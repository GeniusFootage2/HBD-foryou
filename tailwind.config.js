/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        waterlily: ["waterlily", "sans-serif"],
      },
      fontSize: {
        16: ["36rem", "1px"],
      },

      inset: {
        "90rem": "90rem",
        "36rem": "36rem",
        "43rem": "43rem",
        "33rem": "33rem",
      },
    },
  },
  plugins: [],
};
