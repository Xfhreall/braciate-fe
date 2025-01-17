/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  output: "standalone",
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        hostname: "qahzsggmrbbpiaoyuruy.supabase.co",
      },
    ],
  },
};

module.exports = withVideos(nextConfig);
