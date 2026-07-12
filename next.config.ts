import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // static export for GitHub Pages
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
