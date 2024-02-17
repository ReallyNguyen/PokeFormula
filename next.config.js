/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.pokeapi.co/',
        port: ""
      },
      {
        protocol: 'https',
        hostname: 'images.pokemontcg.io',
        port: ""
      }
    ]
  }
}

module.exports = nextConfig
