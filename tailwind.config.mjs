/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#161d6f",
      },
      backgroundColor: {
        primary: "#161d6f",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite', // Custom spin animation with a 12s duration
      },

    },
  },
  plugins: [],
};
