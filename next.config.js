/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'tiktv.eu.org'
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com'
      }
    ]
  }
}

module.exports = nextConfig
