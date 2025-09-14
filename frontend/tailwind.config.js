/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // MongoDB Green Palette
        mongo: {
          50: '#E6F4EA',
          100: '#C8E6D0',
          200: '#A3D9B1',
          300: '#7FCC92',
          400: '#5ABF73',
          500: '#13AA52', // MongoDB primary
          600: '#116149',
          700: '#0F5A42',
          800: '#0D4D38',
          900: '#0A3D2C',
        },

        // Brutalist accent colors (flat for easy use)
        'brutal-green': '#00ff88',
        'brutal-black': '#000000',
        'brutal-yellow': '#FFD600',
        'brutal-grey': '#F2F2F2',
        'brutal-red': '#FF3B3B',
        'brutal-white': '#FFFFFF',

        // Dark mode colors
        dark: {
          bg: '#0A0A0A',
          surface: '#1A1A1A',
          card: '#2A2A2A',
          border: '#404040',
          text: '#FFFFFF',
          textSecondary: '#A0A0A0',
          accent: '#13AA52', // Mongo green accent
        },

        // Primary (duplicate of mongo for compatibility)
        primary: {
          50: '#E6F4EA',
          100: '#C8E6D0',
          200: '#A3D9B1',
          300: '#7FCC92',
          400: '#5ABF73',
          500: '#13AA52',
          600: '#116149',
          700: '#0F5A42',
          800: '#0D4D38',
          900: '#0A3D2C',
        },
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      boxShadow: {
        'brutalist': '4px 4px 0px 0px #000000',
        'brutalist-lg': '8px 8px 0px 0px #000000',
        'brutalist-hover': '2px 2px 0px 0px #000000',
      },
    },
  },
  plugins: [],
}
