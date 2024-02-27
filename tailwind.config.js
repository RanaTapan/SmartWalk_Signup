module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 300: "#e7e3e3", 700: "#6a6a6a" },
        blue_gray: { 100: "#cfcccc" },
        white: { A700: "#ffffff" },
        black: { 900: "#000000" },
      },
      boxShadow: {},
      fontFamily: { karma: "Karma" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
