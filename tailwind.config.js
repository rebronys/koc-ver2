/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        primary: '#212121',
        secondary: '#757575',
        accent: '#FF6F0F',
        'accent-hover': '#E6600D',
        border: '#E0E0E0',
      },
      boxShadow: {
        'daangn': '0px 2px 8px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
