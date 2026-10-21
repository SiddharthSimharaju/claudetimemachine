import type { NextConfig } from "next";

const basePath = process.env.GITHUB_PAGES ? "/claudetimemachine" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
