/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'camelai.com',
        pathname: '/assets/images/**',
      },
    ],
  },
};

module.exports = nextConfig; 