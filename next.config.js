/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      "platform-lookaside.fbsbx.com",
      "firebarestorage.googleapis.com"
    ]
  },
}

module.exports = nextConfig
