/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#FAF7F2",
          surface: "#FFFDF9",
          card: "#F3EEE7",
        },
        accent: {
          main: "#581825",
          subtle: "#7A2E3D",
          gold: "#D4AF37",
        },
        ink: {
          primary: "#2C221E",
          secondary: "#6E6259",
        },
        border: {
          subtle: "#E8E0D5",
        },
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "'Playfair Display'", "serif"],
        display: ["'Playfair Display'", "serif"],
        sans: ["'Plus Jakarta Sans'", "'Inter'", "sans-serif"],
      },
      borderRadius: {
        xl2: "20px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(88, 24, 37, 0.05)",
        softer: "0 4px 16px rgba(88, 24, 37, 0.04)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { transform: "scaleY(1) rotate(-1deg)", opacity: "1" },
          "25%": { transform: "scaleY(1.08) rotate(1deg)", opacity: "0.92" },
          "50%": { transform: "scaleY(0.95) rotate(-2deg)", opacity: "1" },
          "75%": { transform: "scaleY(1.05) rotate(2deg)", opacity: "0.95" },
        },
        rise: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0" },
          "10%": { opacity: "0.8" },
          "90%": { opacity: "0.4" },
          "100%": { transform: "translateY(-120vh) translateX(20px)", opacity: "0" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        flicker: "flicker 1.8s ease-in-out infinite",
        rise: "rise linear infinite",
        fadeUp: "fadeUp 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};
