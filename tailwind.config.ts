import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#186f65",
        secondary: "#8B4513",
        third: "#ccc",
        fourth: "#FAF9F6"
      },
      fontFamily: {
        'gulzar': ['Gulzar', 'sans-serif'],
      },
      boxShadow: {
        Card: "0px 0px 30px rgba(81, 94, 125, 0.15);",
      },
    },
  },
  plugins: [],
}
export default config
