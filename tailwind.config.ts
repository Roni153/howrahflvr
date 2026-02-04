import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#F59E0B",
          beige: "#FAF3E0",
          dark: "#1F2937"
        }
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 25px rgba(0,0,0,0.08)"
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom right, rgba(15,23,42,0.85), rgba(79,70,229,0.6))"
      }
    }
  },
  plugins: []
};

export default config;
