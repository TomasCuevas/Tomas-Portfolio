const { nextui } = require("@nextui-org/react");
import animations from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        "2md": "820px",
      },
    },
  },
  plugins: [animations, nextui()],
};
