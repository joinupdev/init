/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#09d3cd",
        conference: "#72c3ff",
        hackathon: "#d8a8ff",
        "co-working": "#8cf3a9",
        workshop: "#ff7e9c",
        "meet-ups": "#ffb08f",
        disabled: "#7c7c7c",
        error: "#d90000",
      },
      fontFamily: {
        sans: ["Chillax", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
