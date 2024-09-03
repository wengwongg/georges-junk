import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "rainbow-text": "rainbow-text 1s linear infinite",
        "left-and-right": "left-and-right 2s linear infinite",
        "slide-left": "slide-left 8s linear infinite",
      },
      keyframes: {
        "rainbow-text": {
          "0%": { color: "red" },
          "14%": { color: "orange" },
          "28%": { color: "yellow" },
          "42%": { color: "green" },
          "56%": { color: "blue" },
          "70%": { color: "indigo" },
          "84%": { color: "purple" },
          "100%": { color: "red" },
        },
        "left-and-right": {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-10px)" },
        },
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
