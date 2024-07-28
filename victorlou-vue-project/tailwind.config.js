/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx  }"],
  theme: {
    fontFamily: {
      projectFont: ["Rajdhani", "sans-serif"],
    },
    extend: {
      animation: {
        move: "move 2s ease-in-out infinite",
      },
      keyframes: {
        move: {
          "0%": {
            opacity: "0",
            transform: "translateY(100%)",
          },
          "80%": {
            opacity: "1",
            transform: "translateY(-80%)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-120%)",
          },
        },
      },
    },
    colors: {
      // 60% color
      cSixty: "#0a0a0a",
      cSixty800: "#141414",
      cSixty500: "#292929",
      cSixtyOffBlue: "#070029",
      // 30% color
      cThirty : "#fdfdfd",
      cThirty800 : "#f5f5f5",
      cThirty500 : "#f0f0f0",
      cThirtyOff : "#FAF9F6",
      cThirtyOffBlue : "#f5f6fa",
      // 10% color
      cTen : "#0000ff",
      cTen500 : "#001d75",
    },
  },
  plugins: [],
};
