import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        acumin: ["var(--font-acumin)", "sans-serif"],
      },
      colors: {
        primary: "#D13303",
        secondary: "#FCD507",
        white: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
export default config;
