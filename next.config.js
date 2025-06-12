/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // enables static export
    trailingSlash: true, // recommended for static hosting
    images: {
        unoptimized: true, // ✅ disables server-based optimization
      },
  }
  
  module.exports = nextConfig
  