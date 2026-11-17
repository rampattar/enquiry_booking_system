/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep Navy / Marine Blue from reference (Header, Dark Hero, Footer)
        navy: {
          50: '#F2F7FA',
          100: '#E1EDF3',
          200: '#C1DCE8',
          300: '#8BBED5',
          400: '#4F9BBE',
          500: '#267BA1',
          600: '#185F81',
          700: '#134B6E',
          800: '#0E3854', // Signature Deep Navy Blue (#0E3854)
          900: '#0A273C',
          950: '#061A29',
        },
        // Vibrant Medical Cyan / Aqua Turquoise from reference (Banners, Buttons, Accents)
        cyan: {
          50: '#F0FAFA',
          100: '#E2F6F6',
          200: '#C1EFEF',
          300: '#94E3E4',
          400: '#69D3D4',
          500: '#48B6B7', // Signature Vibrant Cyan (#48B6B7)
          600: '#3AA3A4',
          700: '#2E8485',
          800: '#246869',
          900: '#1D4F50',
        },
        // Ice / Soft Light Background
        ice: {
          50: '#FAFCFC',
          100: '#F4F9F9',
          200: '#EAF3F4',
          300: '#DDECEE',
          400: '#CADFE2',
        },
        // Main Text Charcoal
        charcoal: {
          50: '#F5F7F8',
          100: '#E5E9EC',
          200: '#C9D2D9',
          300: '#9EAFBD',
          400: '#6E8496',
          500: '#4A6174',
          600: '#34495A',
          700: '#243746',
          800: '#1B2D38', // Main Body Text (#1B2D38)
          900: '#101D25',
        },
        // Border Soft
        softgrey: {
          50: '#F8FAFB',
          100: '#EEF2F4',
          200: '#E2E8EC',
          300: '#CBD4DA',
          400: '#B0BCC5',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        nav: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(14, 56, 84, 0.05), 0 2px 6px -1px rgba(14, 56, 84, 0.03)',
        'soft-md': '0 8px 24px -4px rgba(14, 56, 84, 0.08), 0 4px 10px -2px rgba(14, 56, 84, 0.04)',
        'soft-lg': '0 16px 36px -6px rgba(14, 56, 84, 0.12), 0 8px 16px -4px rgba(14, 56, 84, 0.06)',
        'cyan-glow': '0 8px 25px -4px rgba(72, 182, 183, 0.4)',
        'navy-glow': '0 8px 25px -4px rgba(14, 56, 84, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
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
      },
    },
  },
  plugins: [],
};
