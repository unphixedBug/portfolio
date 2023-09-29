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
        "bleu-custom": "#24272f",
        "bleu-cv": "#139dc9",
      },
    },
  },
  plugins: [],
};
