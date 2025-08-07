import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // Required for static export
  },
  // For GitHub Pages project sites (username.github.io/repo-name)
  assetPrefix: process.env.NODE_ENV === 'production' ? '/porto/' : '',
  // For GitHub Pages user sites (username.github.io)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
