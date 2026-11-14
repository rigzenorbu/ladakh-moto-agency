import type { NextConfig } from "next";

/*
  The public copy on GitHub Pages is built with GITHUB_PAGES=true
  (see .github/workflows/deploy.yml). It is a plain static site served from
  a sub-folder named after the repository. On your own computer none of
  this applies and the site runs as usual.
*/
const forGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = forGitHubPages
  ? {
      output: "export",
      basePath,
      images: { loader: "custom", loaderFile: "./src/imageLoader.ts" },
    }
  : {};

export default nextConfig;
