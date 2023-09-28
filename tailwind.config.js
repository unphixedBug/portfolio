/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99);",
      },
      colors: {
        "rose-custom": "#aa4b6b",
        "gris-custom": "#6b6b83",
        "bleu-custom": "#3b8d99",
      },
    },
  },
  plugins: [],
};
