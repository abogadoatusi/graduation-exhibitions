import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/graduation-exhibitions',
  assetPrefix: '/graduation-exhibitions',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
