/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.ray-ban.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
