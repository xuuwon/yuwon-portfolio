export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['"Pretendard-Regular"', "sans-serif"],
        main: ['"DM Serif Display"', "serif"],
        content: [""],
      },
      colors: {
        background: {
          DEFAULT: "#FAFAFA", // light
          dark: "#1A1A1A", // dark mode background
        },
        content: {
          DEFAULT: "#2E2E2E", // text color light
          dark: "#F3F3F3", // text color dark
        },
        card: {
          DEFAULT: "#F0F2EC", // card light
          dark: "#2A2A2A", // card dark
        },
      },
      boxShadow: {
        custom: "-20px 30px 10px 5px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
