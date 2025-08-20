// frontend/tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          charcoal: "#1C1C1C",
          silver: "#B0B0B0",
          leather: "#7A4C2E",
        },
        secondary: {
          amber: "#E6A93C",
          burgundy: "#6E2C2C",
          emerald: "#2E5D3A",
        },
        accent: {
          purple: "#5A3F82",
          beige: "#D9C9A8",
        },
      },
      fontFamily: {
        heading: ["'Playfair Display'", "serif"], // luxury-inspired headings
        body: ["'Inter'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
