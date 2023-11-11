module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        blue_gray: {
          100: "#d9d9d9",
          700: "#47566b",
          800: "#2e4057",
          "100_a0": "#d9d9d9a0",
        },
        blue: { 700: "#0b6fee" },
        gray: { 100: "#f5f5f5", 900: "#1c1b1f" },
        amber: { 300: "#ffd166" },
        black: {
          900: "#000000",
          "900_ba": "#000000ba",
          "900_01": "#090d11",
          "900_02": "#111009",
        },
        white: { A700: "#ffffff" },
        red: { A700: "#ff0000" },
      },
      fontFamily: { cousine: "Cousine", amiri: "Amiri" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
