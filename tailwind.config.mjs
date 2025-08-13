/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // These will be available in v4 as CSS variables
        // and can be accessed with utilities like bg-background, text-text-dark, etc.
        background: '#F5F5DC',
        'primary-accent-teal': '#006978',
        'primary-accent-green': '#2D5A4F',
        'secondary-accent-hover': '#5FB09C',
        'text-dark': '#333333',
        'text-light': '#666666',
        borders: '#E0E0E0',
        'brand-primary': '#006978',
        'brand-secondary': '#2D5A4F',
        'brand-accent': '#4A7C59',
        'brand-cta': '#006978',
        'primary-accent-cta': '#006978',
        // New card-specific colors for lighter aesthetic
        'card-background': '#FFFFFF',
        'card-background-soft': '#FEFEFE',
        'card-border': '#E8E5E0',
        'card-shadow': 'rgba(45, 55, 72, 0.08)',
        'card-hover-shadow': 'rgba(45, 55, 72, 0.15)',
        'card-accent-light': '#F8F6F3',
        'card-text-primary': '#2D3748',
        'card-text-secondary': '#4A5568',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        headings: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        card: '0 2px 8px rgba(45, 55, 72, 0.08)',
        'card-hover': '0 4px 16px rgba(45, 55, 72, 0.15)',
        'card-focus': '0 0 0 3px rgba(0, 105, 120, 0.1)',
      },
    },
  },
  plugins: [],
};
