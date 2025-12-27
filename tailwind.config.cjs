/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2563EB', // A custom blue
        'secondary-gold': '#FBBF24', // A custom gold/yellow
        'neutral-light': '#F9FAFB', // Light gray for backgrounds
        'neutral-dark': '#1F2937', // Dark gray for text
        'primary-green': '#34D399', // Custom green for menu
        'wine-red': '#800020',      // Custom wine red for background
        'button-brown': '#A0522D',  // Custom brown for buttons
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Example sans-serif font
        'serif': ['Merriweather', 'serif'], // Example serif font
      },
    },
  },
  plugins: [],
};
