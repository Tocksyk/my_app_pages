/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pt: ["PT Serif", "serif"],
      },
      backgroundImage: {
        "crystal-bg": "url('bgglass.jpg')",
        "lime-bg": "url('bglight.jpg')",
      },
    },
  },
  plugins: [],
};
