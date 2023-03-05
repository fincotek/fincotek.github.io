/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  assetPrefix: isProd ? '/fincotek.github.io/' : '',
  reactStrictMode: true,
}

module.exports = nextConfig
