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
        brand: {
          green: "#00FFA3",
          cyan: "#00D4FF",
          purple: "#9B5DE5",
          pink: "#FF6B9D",
          gold: "#FFB347",
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        blob: "blob 10s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        "ticker-left": "ticker-left 40s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "25%": { transform: "translate(40px, -30px) scale(1.1)" },
          "50%": { transform: "translate(-20px, 40px) scale(0.92)" },
          "75%": { transform: "translate(30px, 20px) scale(1.06)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "ticker-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
