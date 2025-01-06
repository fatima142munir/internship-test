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
        background: "#0D0D13",
        // foreground: "var(--foreground)",
        fontWhite: "#FFFFFF",
        fontGreen: "#52B788"
      },
      backgroundImage: {
        image1 : "url('../public/image 13.png')"
      }
    },
  },
  plugins: [],
};
export default config;
