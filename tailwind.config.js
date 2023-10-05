/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #FFF, #FFF, #FFF);",
      },
      colors: {
        "rose-custom": "#aa4b6b",
        "gris-custom": "#6b6b83",
        darkBG: "#24272F",
        "bleu-cv": "#139dc9",
        "accent-custom": "#9C495E",
        textCustom: "#D2F3FE",
        secondColor: "#2B2E36",
      },
    },
  },
  plugins: [],
};
