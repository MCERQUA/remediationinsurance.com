import type { Config } from "tailwindcss";

/* ============================================================
   REMEDIATION INSURANCE — "Environmental Green & Charcoal" palette
   Token NAMES are inherited from the shared component architecture;
   VALUES are remapped to forest green (primary) / dark charcoal
   (secondary) / environmental green (accent).
   clay = forest green · sage = dark charcoal · gold = env green
   cream = fresh white · sand = soft green-white
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F4F8F5",
        sand: "#EBF2ED",
        white: "#FFFFFF",
        clay: {
          DEFAULT: "#2D7A4F",
          dark: "#1F5C3A",
          light: "#3E9A65",
          50: "#EDF7F1",
          100: "#D4EDE0",
          200: "#A8DAC0",
          300: "#78C49E",
          400: "#3E9A65",
          500: "#2D7A4F",
          600: "#1F5C3A",
          700: "#164229",
          800: "#0E2D1C",
          900: "#071810",
        },
        sage: {
          DEFAULT: "#3A4040",
          dark: "#282E2E",
          light: "#4E5858",
          50: "#EAECEC",
          100: "#D0D4D4",
          200: "#A4ACAC",
          300: "#778282",
          400: "#4E5858",
          500: "#3A4040",
          600: "#282E2E",
          700: "#1A1F1F",
        },
        gold: {
          DEFAULT: "#48A86A",
          dark: "#349055",
          light: "#65C085",
          50: "#EDFAF2",
          100: "#D5F2E3",
          200: "#ABE5C6",
          300: "#7DD5A7",
          400: "#65C085",
          500: "#48A86A",
          600: "#349055",
          700: "#247840",
        },
        espresso: "#141A14",
        cocoa: "#243028",
        mocha: "#486050",
        adobe: "#CCDDD2",
        adobeDark: "#B0C8BA",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "2rem 2rem 2rem 2rem",
        arch2: "2.5rem 2.5rem 1.5rem 1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #F4F8F5 0%, #EBF2ED 40%, #E4F0E8 70%, #F4F8F5 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(45,122,79,0.12) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(58,64,64,0.08) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #2D7A4F 0%, #3E9A65 100%)",
        "sage-gradient": "linear-gradient(135deg, #3A4040 0%, #4E5858 100%)",
        "gold-gradient": "linear-gradient(135deg, #48A86A 0%, #65C085 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(31, 92, 58, 0.22), 0 4px 12px -6px rgba(20, 26, 20, 0.08)",
        "warm-lg": "0 30px 70px -20px rgba(31, 92, 58, 0.28), 0 10px 30px -10px rgba(20, 26, 20, 0.10)",
        card: "0 2px 8px -2px rgba(20, 26, 20, 0.06), 0 1px 3px -1px rgba(20, 26, 20, 0.04)",
        "card-hover": "0 20px 50px -15px rgba(31, 92, 58, 0.24), 0 8px 20px -8px rgba(20, 26, 20, 0.10)",
        arch: "inset 0 -8px 30px -10px rgba(31, 92, 58, 0.10)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
