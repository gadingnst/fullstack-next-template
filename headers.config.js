/** @see https://nextjs.org/docs/api-reference/next.config.js/headers */
function headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        }
      ]
    }
  ];
}

module.exports = headers;
