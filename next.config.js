/* @ts-check */
/* eslint-disable @typescript-eslint/no-var-requires */
const headers = require('./headers.config');
const webpack = require('./webpack.config');

/** @see https://nextjs.org/docs/api-reference/next.config.js/introduction */
/** @type {import('next').NextConfig} */
const nextConfig = {
  headers,
  webpack,
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx']
};

module.exports = nextConfig;
