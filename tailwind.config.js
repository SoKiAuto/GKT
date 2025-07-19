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
      colors: {
        bg: 'var(--color-bg)',
        primary: 'var(--color-primary)',
        accent: 'var(--color-accent)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
        border: 'var(--color-border)',
        navbar: 'var(--color-navbar-bg)',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        accent: '0 0 10px var(--color-shadow)',
      },
    },
  },
  plugins: [
    aspectRatio,
    forms,
    typography
  ],
};
