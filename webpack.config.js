/** @see https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config */
function webpack(config) {
  /**
   * handle SVGR module
   * @see https://react-svgr.com/docs/webpack/
   */
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.svg$/i,
      type: 'asset',
      resourceQuery: /url/
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: [{
        loader: '@svgr/webpack',
        options: {
          typescript: true,
          dimensions: false
        }
      }]
    }
  ];
  return config;
}

module.exports = webpack;
