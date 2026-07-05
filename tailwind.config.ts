import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f5efe7",
          100: "#eadccd",
          200: "#d5bda7",
          300: "#bc987e",
          400: "#a4775d",
          500: "#8d5f47",
          600: "#754b38",
          700: "#5d3a2d",
          800: "#432b24",
          900: "#352720",
          950: "#241b17",
        },
        gold: "#a7613f",
        ink: "#2c2520",
        clay: {
          50: "#f7eee7",
          100: "#ecd9cb",
          200: "#dcb99f",
          300: "#c99270",
          400: "#b66f4a",
          500: "#a7613f",
          600: "#8f4f35",
          700: "#72402e",
          800: "#553229",
          900: "#39241f",
        },
        olive: {
          50: "#f2f1eb",
          100: "#dedccf",
          200: "#c3bfa8",
          300: "#a8a080",
          400: "#8c845f",
          500: "#6f704f",
          600: "#57583f",
          700: "#41432f",
        },
        sand: {
          50: "#faf5ec",
          100: "#f1e7d9",
          200: "#dfcbb6",
        },
        stonebrand: {
          50: "#f7f3ed",
          100: "#eee6db",
          200: "#d9cbbb",
        },
        surface: {
          50: "#faf7f1",
          100: "#f1e8dc",
          200: "#e0d0be",
        },
      },
      boxShadow: {
        soft: "0 20px 55px rgba(44, 37, 32, 0.08)",
        card: "0 16px 44px rgba(44, 37, 32, 0.06)",
        lift: "0 24px 70px rgba(44, 37, 32, 0.11)",
      },
    },
  },
  plugins: [],
};

export default config;
