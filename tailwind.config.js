/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        primary: colors.purple,
        secondary: colors.pink,
        sky: colors.lightBlue, // Updated from lightBlue to sky
        stone: colors.gray[500], // Updated from warmGray to stone
        neutral: colors.gray[700], // Updated from trueGray to neutral
        gray: colors.gray[400], // Updated from coolGray to gray
        slate: colors.blueGray[500], // Updated from blueGray to slate
      },
    },
  },
  plugins: [],
};
