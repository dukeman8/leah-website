/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      spacing: {
        105: "420px",
        130: "520px",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        card: "var(--card)",
        "card-hover": "var(--card-hover)",

        muted: "var(--muted)",
        border: "var(--border)",

        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
      },

      boxShadow: {
        soft: "0 10px 30px rgba(0, 0, 0, 0.12)",
      },

      borderRadius: {
        xl: "1rem",
      },

      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },

      zIndex: {
        9999: "9999",
      },
    },
  },

  plugins: [],
};