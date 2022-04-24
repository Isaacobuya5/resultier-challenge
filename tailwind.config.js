module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Barlow: ["Barlow Semi Condensed", "sans-serif"],
    },
    extend: {
      colors: {
        scissorsGradientFrom: "hsl(39, 89%, 49%)",
        scissorsGradientTo: "var(--scissor-gradient-darken)",
        paperGradientFrom: "hsl(230, 89%, 62%)",
        paperGradientTo: "var(--paper-gradient-darken)",
        rockGradientFrom: "hsl(349, 71%, 52%)",
        rockGradientTo: "var(--rock-gradient-darken)",
        lizardGradientFrom: "hsl(261, 73%, 60%)",
        lizardGradientTo: "hsl(261, 72%, 63%)",
        cyanGradientFrom: "hsl(189, 59%, 53%)",
        cyanGradientTo: "hsl(189, 58%, 57%)",
        darkText: "var(--dark-text-color)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
        counterBg: "rgba(0, 0, 0, 0.3)",
        modalOverlay: "rgba(0, 0, 0, 0.5)",
      },
    },
    screens: {
      mobile: "375px",
      desktop: "1366px",
    },
    backgroundImage: {
      paperIcon: "url('../public/images/icon-paper.svg')",
      scissorsIcon: "url('../public/images/icon-scissors.svg')",
      rockIcon: "url('../public/images/icon-rock.svg')",
    },
  },
  plugins: [],
};
