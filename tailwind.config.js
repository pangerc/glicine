/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        iskry: ["Iskry One", "sans-serif"],
      },
      colors: {
        "green-glicine": "#B0CDAF", // Your custom color without shades
        "creme-glicine": "#FFFBF7", // Your custom color without shades
        "glow-glicine": "#FFEEC5", // Your custom color without shades
        "dusk-glicine": "#D6DAD9", // Your custom color without shades
      },
    },
  },
  plugins: [],
};
