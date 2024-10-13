/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "xzzrzpvflmlugnhzkdki.supabase.co",
      },
    ],
  },
};

module.exports = withVideos(nextConfig);
