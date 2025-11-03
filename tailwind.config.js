/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // A friendly blue
          dark: '#1d4ed8',
        },
        secondary: '#10b981', // A welcoming green
        accent: '#f59e0b', // A warm accent color
        light: '#f3f4f6',
        dark: '#111827',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
