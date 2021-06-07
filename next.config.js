const package = require('./package.json');
const isProd = (process.env.NODE_ENV || 'production') === 'production'

module.exports = {
  assetPrefix: isProd ? '/icons' : '',
  publicRuntimeConfig: {
    libVersion: `v${package.version}`,
  },
};
