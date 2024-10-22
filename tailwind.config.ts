import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kida': ['BD_Plakatbau', 'sans-serif'],
        'okcomputer': ['Microgramma', 'sans-serif'],
        'avenir': ['avenir', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        powercut_yellow:'#F5C249',
        powercut_pink:'#FF5757',
        powercut_pink_contrast: '#FF6B6B',
        dark_bg_box: '#0a0a0a',
      },
    },
  },
  plugins: [],
};
export default config;
