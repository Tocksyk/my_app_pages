/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pt: ["PT Serif", "serif"],
      },
      backgroundImage: {
        hom: "url('bgglass.jpg')",
      },
    },
  },
  plugins: [],
};
