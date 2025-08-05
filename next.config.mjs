// next.config.mjs
export default {
  output: "export",              // generate static HTML
  images: { unoptimized: true }, // allow next/image on export
  trailingSlash: true,           // generate folder-based routes: /about/ -> about/index.html
};
