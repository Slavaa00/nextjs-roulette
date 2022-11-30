/** @type {import('next').NextConfig} */

const nextConfig = {
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  swcMinify: true,

  webpack: (config) => {
  
    config.experiments = { topLevelAwait: true};
  
    return config
  },
}

module.exports = nextConfig;
