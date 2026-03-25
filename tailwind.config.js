/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#131313',
        'surface-bright': '#3a3939',
        'surface-container': '#201f1f',
        'surface-container-low': '#1c1b1b',
        'surface-container-high': '#2a2a2a',
        'surface-container-highest': '#353534',
        'surface-variant': '#353534',
        primary: '#71ffe8',
        'primary-container': '#00e5cc',
        'primary-fixed-dim': '#00dfc6',
        outline: '#849490',
        'outline-variant': '#3b4a46',
        'on-primary': '#003730',
        'on-primary-container': '#006256',
        'on-surface': '#e5e2e1',
        'on-surface-variant': '#b9cac5',
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(0, 229, 204, 0.2)',
      },
    },
  },
  plugins: [],
}

