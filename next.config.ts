import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Placeholder photography is served from the Pexels CDN (already sized &
    // compressed via URL params). We skip Next's image optimizer for these to
    // keep dev fast and avoid optimizer cost — revisit if you switch to large
    // owned/original images in /public.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
