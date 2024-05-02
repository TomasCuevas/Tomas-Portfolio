/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#04030C",
        darkLight: "#111017",
        purple: "#54437A",
        light: "#858FAD",
      },
      screens: {
        xs: "500px",
      },
    },
  },
  plugins: [],
};
