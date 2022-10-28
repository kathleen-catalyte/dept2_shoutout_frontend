/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cloudflare-ipfs.com', 'avatars.slack-edge.com', 'secure.gravatar.com']
  }
}

module.exports = nextConfig