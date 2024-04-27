// next.config.mjs
const nextConfig = {
  basePath: "/react",
  output: 'export',
  reactStrictMode: true,

  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
    };
  },
};

export default nextConfig;
