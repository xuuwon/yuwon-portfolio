/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ['"DM Serif Display"', "serif"],
        content: [""],
      },
      colors: {
        background: "#403D39",
        content: "#FFFCF2",
      },
      boxShadow: {
        custom: "-20px 30px 10px 5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
