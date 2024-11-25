import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cloudflare-ipfs.com'], // Add the external domain here
  },
};

export default nextConfig;
