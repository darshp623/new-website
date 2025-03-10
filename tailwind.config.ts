import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00e1ff', // Cyan accent color from original site
          hover: '#00c4dd', // Slightly darker for hover states
        },
        background: {
          dark: '#02040f', // Dark blue from gradient
          medium: '#040a19', // Medium blue from gradient
          light: '#03081b', // Light blue from gradient
        },
        text: {
          primary: '#ffffff', // White text
          secondary: 'rgba(255, 255, 255, 0.7)', // Slightly transparent white
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-site': 'linear-gradient(to left, #02040f, #040a19, #03081b, #040a19, #02040f)',
      },
    },
  },
  plugins: [],
};

export default config;
