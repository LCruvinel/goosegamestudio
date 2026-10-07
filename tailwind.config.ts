import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050816",
        surface: "#0f172a",
        accent: "#7c3aed",
        primary: "#22c55e",
        highlight: "#facc15",
      },
      boxShadow: {
        glow: "0 0 30px rgba(124, 58, 237, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
