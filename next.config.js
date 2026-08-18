/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false
  },
  images: {
    formats: ['image/avif','image/webp']
  }
};
module.exports = nextConfig;
