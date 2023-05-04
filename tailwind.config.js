/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        'primary-site': '#feb556'
      },
      backgroundColor: {
        'background-site': '#000',
        'primary-site': '#feb556',
        'secondary-site': '#F69E2A'
      },
      borderColor: {
        'primary-site': '#feb556'
      },
      height: {
        'half-screen': '50vh',
        '500px': '500px',
        '400px': '400px',
      },
      minHeight: {
        'half-screen': '50vh'
      },
      boxShadow: {
        'product-card': '3px 3px 3px 2px rgb(15 23 42);'
      }
    },
  },
  plugins: [],
}
