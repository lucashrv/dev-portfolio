import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#824ee4", // Lucas' signature purple
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          950: "#2e1065",
        },
        dark: {
          base: "#0f0f17",
          card: "#161626",
          border: "#28283f",
          lighter: "#1e1e34",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
        heading: ["var(--font-caveat)", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
