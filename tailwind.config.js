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
        scissorsGradientTo: "hsl(40, 84%, 53%)",
        paperGradientFrom: "hsl(230, 89%, 62%)",
        paperGradientTo: "hsl(230, 89%, 65%)",
        rockGradientFrom: "hsl(349, 71%, 52%)",
        rockGradientTo: "hsl(349, 70%, 56%)",
        lizardGradientFrom: "hsl(261, 73%, 60%)",
        lizardGradientTo: "hsl(261, 72%, 63%)",
        cyanGradientFrom: "hsl(189, 59%, 53%)",
        cyanGradientTo: "hsl(189, 58%, 57%)",
        darkText: "hsl(229, 25%, 31%)",
        scoreText: "hsl(229, 64%, 46%)",
        headerOutline: "hsl(217, 16%, 45%)",
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
    // backgroundColor: {
    //   backgroundGradient:
    //     "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
    // },
  },
  plugins: [],
};
