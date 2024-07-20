/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    domains: ['cdn.pixabay.com'],
  },
};

module.exports = {
  env: {
    BASEURL: process.env.REACT_APP_BASE_URL,
  },
};

module.exports = nextConfig;


// next.config.js
const path = require('path');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
          name: '[name].[hash].[ext]',
        },
      },
    });

    return config;
  },
};
