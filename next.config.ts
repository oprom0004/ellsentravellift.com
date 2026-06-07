import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Since we are exporting statically, we disable server-side image optimization
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
