/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary: Deep Teal (#174C4B)
        teal: {
          50: '#F0F6F5',
          100: '#D9E8E6',
          200: '#B7D1CC', // Soft Aqua Accent 1
          300: '#8FBAB3',
          400: '#4D827D',
          500: '#2A6664',
          600: '#1F5553',
          700: '#174C4B', // Primary Brand Deep Teal
          800: '#123D3C',
          900: '#0C2B2A',
        },
        // Secondary: Warm Ivory (#F7F5F0)
        ivory: {
          50: '#FDFCFB',
          100: '#F7F5F0', // Secondary Warm Ivory
          200: '#ECE8DF',
          300: '#DDD6C6',
          400: '#C9BEA8',
        },
        // Accent 1: Soft Aqua (#B7D1CC)
        aqua: {
          50: '#F4F8F7',
          100: '#EDF4F1', // Light Background Pale Aqua
          200: '#D5E5E2',
          300: '#B7D1CC', // Soft Aqua Accent
          400: '#94BDB5',
          500: '#6FA399',
        },
        // Accent 2: Dusty Rose (#C98F83)
        rose: {
          50: '#FAF4F3',
          100: '#F5E8E5',
          200: '#E8CEC8',
          300: '#DBB3A9',
          400: '#C98F83', // Accent Dusty Rose
          500: '#B37568',
          600: '#995B4F',
          700: '#7C443A',
        },
        // Main Text: Charcoal (#263A3A)
        charcoal: {
          50: '#F2F4F4',
          100: '#E0E5E5',
          200: '#C0CACA',
          300: '#97A5A5',
          400: '#687878',
          500: '#475656',
          600: '#344545',
          700: '#2C3E3E',
          800: '#263A3A', // Main Text Charcoal
          900: '#192828',
        },
        // Borders: Soft Grey (#E3E9E6)
        softgrey: {
          50: '#F8FAF9',
          100: '#EFF2F0',
          200: '#E3E9E6', // Soft Grey Border
          300: '#CCD5D1',
          400: '#B1BCB7',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        nav: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(23, 76, 75, 0.05), 0 2px 6px -1px rgba(23, 76, 75, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(23, 76, 75, 0.08), 0 4px 10px -2px rgba(23, 76, 75, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(23, 76, 75, 0.12), 0 8px 16px -4px rgba(23, 76, 75, 0.06)',
        'teal-glow': '0 8px 25px -4px rgba(23, 76, 75, 0.25)',
        'rose-glow': '0 8px 25px -4px rgba(201, 143, 131, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
};
