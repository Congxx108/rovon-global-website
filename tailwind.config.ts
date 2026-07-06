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
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1f2937",
          900: "#111827",
          950: "#0b1220",
        },
        graphite: {
          50: "#f7f7f5",
          100: "#eeeeeb",
          200: "#dadad5",
          300: "#b8b9b2",
          400: "#8d9088",
          500: "#6f726a",
          600: "#565951",
          700: "#42453f",
          800: "#2b2e2a",
          900: "#171917",
          950: "#0b0c0b",
        },
        gold: "#9c6b42",
        ink: "#171917",
        clay: {
          50: "#f7f7f7",
          100: "#eeeeee",
          200: "#dddddd",
          300: "#bdbdbd",
          400: "#8f8f8f",
          500: "#5f5f5f",
          600: "#111111",
          700: "#0a0a0a",
          800: "#050505",
          900: "#000000",
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
          50: "#fbfaf7",
          100: "#f5f3ee",
          200: "#e7e3d9",
        },
        stonebrand: {
          50: "#fafafa",
          100: "#f4f4f2",
          200: "#e3e3df",
        },
        surface: {
          50: "#ffffff",
          100: "#f9fafb",
          200: "#eef2f7",
        },
      },
      boxShadow: {
        soft: "0 16px 48px rgba(23, 25, 23, 0.05)",
        card: "0 18px 48px rgba(23, 25, 23, 0.07)",
        lift: "0 24px 70px rgba(23, 25, 23, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
