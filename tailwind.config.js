/** @type {import('tailwindcss').Config} */

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
   colors: {
        primary: '#8B4513',
        secondary: '#D2691E',
        accent: '#FF6347',
        gold: '#FFD700',
      },
  },
};
export const plugins = [];