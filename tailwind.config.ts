import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Surface hierarchy (darkest → lightest elevated)
        "surface":                   "#0a0d3a",
        "surface-dim":               "#0a0d3a",
        "surface-container-lowest":  "#040735",
        "surface-container-low":     "#131742",
        "surface-container":         "#171b46",
        "surface-container-high":    "#222651",
        "surface-container-highest": "#2d315d",
        "surface-variant":           "#2d315d",
        "surface-bright":            "#313561",
        // Primary
        "primary":                   "#b7c4ff",
        "primary-fixed":             "#dce1ff",
        "primary-fixed-dim":         "#b7c4ff",
        "primary-container":         "#334eac",
        "on-primary":                "#002682",
        "on-primary-container":      "#bcc8ff",
        "on-primary-fixed":          "#001552",
        "on-primary-fixed-variant":  "#213e9d",
        "inverse-primary":           "#3d57b6",
        "surface-tint":              "#b7c4ff",
        // Secondary
        "secondary":                 "#d6baff",
        "secondary-fixed":           "#ecdcff",
        "secondary-fixed-dim":       "#d6baff",
        "secondary-container":       "#593491",
        "on-secondary":              "#401677",
        "on-secondary-container":    "#cba8ff",
        "on-secondary-fixed":        "#280056",
        "on-secondary-fixed-variant":"#57328f",
        // Tertiary
        "tertiary":                  "#aecadf",
        "tertiary-fixed":            "#cae6fc",
        "tertiary-fixed-dim":        "#aecadf",
        "tertiary-container":        "#3e596b",
        "on-tertiary":               "#173344",
        "on-tertiary-container":     "#b3cfe4",
        "on-tertiary-fixed":         "#001e2d",
        "on-tertiary-fixed-variant": "#2f4a5b",
        // On-surface & backgrounds
        "on-surface":                "#e0e0ff",
        "on-surface-variant":        "#c5c5d4",
        "inverse-on-surface":        "#282c58",
        "inverse-surface":           "#e0e0ff",
        "background":                "#0a0d3a",
        "on-background":             "#e0e0ff",
        // Outline
        "outline":                   "#8f909e",
        "outline-variant":           "#444652",
        // Error
        "error":                     "#ffb4ab",
        "error-container":           "#93000a",
        "on-error":                  "#690005",
        "on-error-container":        "#ffdad6",
      },
      fontFamily: {
        headline: ["var(--font-akira)", "sans-serif"],
        body:     ["var(--font-poppins)", "sans-serif"],
        label:    ["var(--font-nunito)", "sans-serif"],
        sans:     ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "sm":      "2px",
        "DEFAULT": "4px",
        "md":      "8px",
        "lg":      "12px",
        "xl":      "16px",
        "2xl":     "24px",
        "full":    "9999px",
      },
      animation: {
        "fade-in":        "fadeIn 0.8s ease-out forwards",
        "fade-in-up":     "fadeInUp 0.8s ease-out forwards",
        "glow-pulse":     "glowPulse 8s ease-in-out infinite",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "pulse-glow":     "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.3" },
          "50%":      { opacity: "0.6" },
        },
        slideInRight: {
          "from": { transform: "translateX(100%)", opacity: "0" },
          "to":   { transform: "translateX(0)",    opacity: "1" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(183,196,255,0.4)" },
          "50%":      { boxShadow: "0 0 16px rgba(183,196,255,0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
