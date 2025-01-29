/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // This will help with local images
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 