import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0b0a",
        panel: "#141614",
        "panel-2": "#191c19",
        line: "#26291f",
        paper: "#ece9df",
        muted: "#8a8f82",
        signal: "#7CFF9E",
        "signal-dim": "#4f9a63",
        amber: "#e0b155",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        card: "22px",
      },
      backgroundImage: {
        scanlines:
          "repeating-linear-gradient(0deg, rgba(124,255,158,0.035) 0px, rgba(124,255,158,0.035) 1px, transparent 1px, transparent 3px)",
      },
    },
  },
  plugins: [],
};
export default config;
