/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'github.com/*', 'https://github.com/', 'raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
