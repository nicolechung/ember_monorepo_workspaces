'use strict';

module.exports = {
  name: require('./package').name,
  // https://dev.to/michalbryxi/share-emberjs-common-code-between-apps-1a7k
  isDevelopingAddon: function () {
    return true;
  },
};
