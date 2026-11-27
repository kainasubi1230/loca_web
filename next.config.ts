import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 開発中に同じWi-Fiのスマホや別PCから http://192.168.x.x:3000 で確認できるようにする
  allowedDevOrigins: ["192.168.*.*"],
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
