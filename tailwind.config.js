/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#030209",
        darkLight: "#111017",
        purple: "#54437a",
        light: "#a5afcd",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
