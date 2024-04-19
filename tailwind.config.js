/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Lexend Deca", "sans-serif"],
    },
    screens: {
      phone: "300px",
      tablet: "568px",
      laptop: "1025px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        card: "#F1F1F1",
        primary: "#9A3B3B",
        secondary: "#C08261",
        tertiary: "#E2C799",
        cream: "#F2ECBE",
      },
      aspectRatio: {
        "2/3": "2 / 3",
      },
    },
  },
  plugins: [],
};
