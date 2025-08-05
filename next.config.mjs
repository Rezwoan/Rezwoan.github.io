/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export with the App Router
  output: 'export',

  // GitHub Pages doesn’t run an image server
  images: { unoptimized: true },

  // Optional but often helps with static hosting
  trailingSlash: true,
};

export default nextConfig;
