/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      darkPurple: "#423A61BA",
      white: "#ffffff",
      yellow: "#facc15",
      transparentPurple: "#2F2945",
      lightPurple: "#301934",
    },
    fontFamily: {
      SFproLight: ["SFproLight", "light"],
      SFproMedium: ["SFproMedium", "medium"],
      SFproRegular: ["SFproRegular", "regular"],
      SFproSemibold: ["SFproSemibold", "semibold"],
      SFproBold: ["SFproBold", "bold"],
    },
    extend: {},
  },
  plugins: [],
};
