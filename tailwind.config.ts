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
        gold: "#b8642f",
        ink: "#111827",
        clay: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#d97706",
          600: "#b8642f",
          700: "#92400e",
          800: "#7c2d12",
          900: "#431407",
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
          50: "#f8fafc",
          100: "#f3f4f6",
          200: "#e5e7eb",
        },
        stonebrand: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
        },
        surface: {
          50: "#ffffff",
          100: "#f9fafb",
          200: "#eef2f7",
        },
      },
      boxShadow: {
        soft: "0 12px 34px rgba(15, 23, 42, 0.05)",
        card: "0 10px 28px rgba(15, 23, 42, 0.045)",
        lift: "0 18px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
