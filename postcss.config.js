/** @see https://tailwindcss.com/docs/configuration#generating-a-post-css-configuration-file */
module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {}
  }
};
