const basePath = process.env.NODE_ENV === 'production' ? '/Resume' : '';

module.exports = {
  basePath,
  assetPrefix: basePath,
  pageExtensions: ['tsx', 'jsx', 'js', 'ts'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    }

    return config;
  },
};