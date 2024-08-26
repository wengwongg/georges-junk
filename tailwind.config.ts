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
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
