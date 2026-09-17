/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ← MUST be "class" for the anti-flash script to work
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-bg)",
        surface: "var(--color-surface)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: {
          main: "var(--color-text-main)",
          muted: "var(--color-text-muted)",
          inverted: "var(--color-text-inverted)"
        },
        border: "var(--color-border)"
      }
    }
  },
  plugins: []
};
