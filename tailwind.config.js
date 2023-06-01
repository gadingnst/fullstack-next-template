/* eslint-disable @typescript-eslint/no-var-requires */

const keyframes = require('./design/keyframes');

/** @see https://tailwindcss.com/docs/configuration */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/packages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes,
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
