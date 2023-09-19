import { type Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        // Fill-h should scale the element from 0 to 100% height once, then stay at 100% height
        "fill-h": "fill-h 2s ease-in-out forwards",
      },
      keyframes: {
        "fill-h": {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
      },
      colors: {
        "kick-green": "#53FC18",
        "main-dark": "#191B1F",
        "main-dark-light": "#67677F",
        "main-dark-highlight": "#272730",
        "main-red": "#E8353F",
        "brand": "#F7193E"
      },
      boxShadow: {
        good: "0px 10px 20px 0px rgba(0, 0, 0, 0.15), 0px 5px 10px 0px rgba(0, 0, 0, 0.25)",
        "good-2xl":
          "0px 15px 25px 0px rgba(0, 0, 0, 0.25), 0px 10px 15px 0px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        "sans-serif": ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
