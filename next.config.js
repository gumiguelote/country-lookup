/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true, 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
