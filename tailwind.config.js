/* eslint-disable @typescript-eslint/no-var-requires */

const keyframes = require('./design/keyframes');

/** @see https://tailwindcss.com/docs/configuration */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/modules/**/*.{js,jsx,ts,tsx}',
    './src/pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes
    }
  },
  plugins: []
};
