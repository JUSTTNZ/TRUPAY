/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], 
      },
      animation: {
        fadeInLeft: 'fadeInLeft 1s ease-out forwards',
        fadeUp: 'fadeUp 1s ease-out forwards',
        fadeDown: 'fadeDown 1s ease-out forwards',
        fadeInRight: 'fadeInRight 1s ease-out forwards',
        fadeOut: 'fadeOut 0.3s forwards',
      },
      keyframes: {
        fadeInLeft: {
          '0%': { opacity: 0, transform: 'translateX(-100%)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: 0, transform: 'translateY(-50px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(100px)' }, // Changed to 100px for incoming from right
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}