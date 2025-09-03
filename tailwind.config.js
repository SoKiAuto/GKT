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
        primary: "#09328E",
        accent: "#EA9236",
        light: "#FFFEFF",
        
       
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
