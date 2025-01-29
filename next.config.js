/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This will help with local images
    domains: ['images.unsplash.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig 