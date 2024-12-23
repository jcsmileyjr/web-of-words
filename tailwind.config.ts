import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'spider-pattern': "url('/images/sky-spider.jpeg')", },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primaryBlue': "#191970",
        'secondaryBlue': "#000080",
        'contrastPurple': "#4B0082",
        'borderStrawberry': "#B76E79",
      },
    },
  },
  plugins: [],
} satisfies Config;
