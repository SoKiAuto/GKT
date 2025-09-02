import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'trade-winds': ['"Trade Winds"', 'cursive'],
      },

      // Custom Kandira Brand Palette
      colors: {
        bg: 'var(--color-bg)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        navbar: 'var(--color-navbar-bg)',

        // Kandira fixed palette (can be used directly)
        'marian-blue': '#1D4295',
        'egyptian-blue': '#09328E',
        'carrot-orange': '#EA9236',
        'white-2': '#FFFEFF',
      },

    

      transitionDuration: {
        400: '400ms',
      },

      boxShadow: {
        accent: '0 0 10px var(--color-shadow)',
         'glow-primary': '0 0 15px var(--color-primary)', // A soft, widespread glow
        'glow-accent': '0 0 15px var(--color-accent)', // A soft, widespread glow for accent
      },
    },
  },

  plugins: [
    aspectRatio,
    forms,
    typography
  ],
};
