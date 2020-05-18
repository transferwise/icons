const package = require('./package.json');

module.exports = {
  publicRuntimeConfig: {
    libVersion: `v${package.version}`,
  },
};
