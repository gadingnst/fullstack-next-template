/** @see https://tailwindcss.com/docs/configuration */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/packages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,jsx,ts,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      'sans': ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
      'serif': ['var(--font-inter)', 'ui-serif', 'Georgia'],
      'mono': ['var(--font-inter)', 'ui-monospace', 'SFMono-Regular']
    },
    extend: {
      keyframes: require('./design/keyframes'),
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: []
};
