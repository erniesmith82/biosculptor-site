/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B2B2B',       // Dark text and headings
        accent: '#F97316',        // Orange CTA and highlights
        soft: '#E5E7EB',          // Light background or borders
        base: '#FFFFFF',          // Default background
        deep: '#1F2937',          // Footer or dark section background
        orangeTint: '#FED7AA'     // Hover states or subtle highlights
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        carousel: 'carousel 20s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        carousel: {
          '0%':   { transform: 'translateX(0%)' },
          '25%':  { transform: 'translateX(-100%)' },
          '50%':  { transform: 'translateX(-200%)' },
          '75%':  { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    }
  },
  plugins: []
}
