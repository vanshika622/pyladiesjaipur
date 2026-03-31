/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#6366F1",
        "primary-blue": "#3B82F6",
        "accent": "#D4C3A3",
        "background": "#050505",
        "surface": "#0A0A0B",
        "surface-raised": "#121214",
        "on-background": "#FFFFFF",
        "on-surface": "#F1F1F1",
        "on-surface-variant": "#D1D1D1",
        "border": "rgba(255, 255, 255, 0.05)",
        "border-accent": "rgba(212, 195, 163, 0.2)",
      },
      fontFamily: {
        "headline": ["Space Grotesk", "sans-serif"],
        "body": ["Inter", "sans-serif"],
      },
      boxShadow: {
        "elevated": "0 20px 80px rgba(0, 0, 0, 0.8)",
        "glow": "0 0 60px rgba(99, 102, 241, 0.15)",
        "accent-glow": "0 0 30px rgba(212, 195, 163, 0.1)",
      },
      borderRadius: {
        "DEFAULT": "0.375rem",
        "lg": "0.75rem",
        "xl": "1.25rem",
        "2xl": "2.5rem",
      },
      boxShadow: {
        "premium": "0 20px 50px rgba(0, 0, 0, 0.5)",
        "glow": "0 0 30px rgba(79, 70, 229, 0.2)",
      }
    },
  },
  plugins: [],
}
