import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        convexo: {
          purple: '#401777',
          navy: '#081F5C',
          blue: '#334EAC',
          lightblue: '#BAD6EB',
          cream: '#FFF9EF',
        },
      },
    },
  },
  plugins: [],
};
export default config;

