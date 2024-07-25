/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#475569',
        'primary-light': '#cbd5e1',
        'primary-dark': '#0f172a',
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-left': {
          '0%': { transform: 'translateX(-5rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(5rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translatey(5rem)', opacity: '0' },
          '100%': { transform: 'translatey(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translatey(-5rem)', opacity: '0' },
          '100%': { transform: 'translatey(0)', opacity: '1' },
        },
      },
      animation: {
        appear: 'appear 0.5s ease-in-out backwards',
        'slide-left': 'slide-left 0.5s ease-out backwards',
        'slide-right': 'slide-right 0.5s ease-out backwards',
        'slide-up': 'slide-up 0.5s ease-in-out backwards',
        'slide-down': 'slide-down 0.3s ease-in-out backwards',
      },
    },
  },
  plugins: [],
};
