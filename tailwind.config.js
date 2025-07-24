/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#2B2B2B',
        accent: '#F97316',
        soft: '#E5E7EB',
        base: '#FFFFFF',
        deep: '#1F2937',
        orangeTint: '#FED7AA'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 180s linear infinite',
        carousel: 'carousel 30s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        carousel: {
          '0%': { transform: 'translateX(0%)' },
          '25%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-200%)' },
          '75%': { transform: 'translateX(-300%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      }
    }
  },
  plugins: []
}

