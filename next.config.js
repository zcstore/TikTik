/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yt3.ggpht.com', 'www.bing.com', 'cdn.pixabay.com', 'lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
