/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flipIn: {
          '0%': { 
            opacity: '0', 
            transform: 'perspective(1000px) rotateY(-12deg) translateY(6px)',
          },
          '100%': { 
            opacity: '1', 
            transform: 'perspective(1000px) rotateY(0deg) translateY(0)',
          }
        },
        driftOne: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(6%, 8%) scale(1.08)' }
        },
        driftTwo: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1.08)' },
          '50%': { transform: 'translate(-6%, -8%) scale(0.92)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.25s ease-out forwards',
        flipIn: 'flipIn 0.38s cubic-bezier(0.25, 1, 0.5, 1) forwards',
        driftOne: 'driftOne 14s ease-in-out infinite',
        driftTwo: 'driftTwo 18s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
