/* @ts-check */
/* eslint-disable @typescript-eslint/no-var-requires */
const headers = require('./headers.config');
const webpack = require('./webpack.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers,
  webpack,
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['ts', 'tsx']
};

module.exports = nextConfig;
