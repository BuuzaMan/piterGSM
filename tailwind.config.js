/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', 
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'desktopxl': '1920px',
      'desktopmd': '1600px',
      'desktopsm': '1360px',
      'tablet': '1200px',
      'tabletsm': '1024px',
      'mobilexl': '768px',
      'mobilemd': '480px',
      'mobilesm': '360px',
    },
    extend: {
      fontFamily: {
        druk: "var(--font-druk)",
        unbounded: "var(--font-unbounded)",
        golos: "var(--font-golos)",
        oswald: "var(--font-oswald)",
        sf: "var(--font-sf)"
      }
    },
  },
  plugins: [],
}

