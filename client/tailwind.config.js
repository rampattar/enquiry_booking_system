/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F2F6F4',
          100: '#E5EDE9',
          200: '#CBDCD3',
          300: '#B1CBBD',
          400: '#8FAF9D', // Primary Brand Color
          500: '#769785',
          600: '#5C7E6C',
          700: '#456153',
          800: '#31463B',
          900: '#1F2E27',
        },
        beige: {
          50: '#FAF8F5',
          100: '#F5F0E8', // Secondary Brand Color
          200: '#EBE2D4',
          300: '#DED1BD',
          400: '#CEBEA3',
          500: '#BDAC90',
        },
        charcoal: {
          50: '#F4F5F5',
          100: '#E3E6E5',
          200: '#C2C8C6',
          300: '#9DA7A4',
          400: '#707B77',
          500: '#4F5855',
          600: '#3D4642',
          700: '#353F3A',
          800: '#303A35', // Deep Charcoal Body Text
          900: '#1C2320',
        },
        gold: {
          50: '#FAF7F0',
          100: '#F4ECD8',
          200: '#E7D8AF',
          300: '#D9C287',
          400: '#CFB37B',
          500: '#C5A46D', // Accent Muted Gold
          600: '#AA8852',
          700: '#896C3E',
        },
        offwhite: '#FAF9F6', // Brand Background
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(48, 58, 53, 0.06), 0 2px 6px -1px rgba(48, 58, 53, 0.04)',
        'soft-lg': '0 10px 25px -3px rgba(48, 58, 53, 0.08), 0 4px 10px -2px rgba(48, 58, 53, 0.04)',
      },
    },
  },
  plugins: [],
};

