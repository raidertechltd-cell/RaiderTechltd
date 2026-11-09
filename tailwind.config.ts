import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B5CF6",
          50: "#F5F3FF",
          600: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#22C55E",
          50: "#ECFDF5",
        },
        ink: "#0F172A",
        body: "#475569",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glowPurple: "0 10px 30px -8px rgba(139, 92, 246, 0.55)",
        glowGreen: "0 10px 30px -8px rgba(34, 197, 94, 0.45)",
        soft: "0 8px 24px -12px rgba(15, 23, 42, 0.18)",
      },
    },
  },
  plugins: [],
};
export default config;