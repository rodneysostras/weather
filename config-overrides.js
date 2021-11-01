const path = require('path');

const { override, addWebpackAlias } = require('customize-cra');
 
module.exports = override(
  // Configure path alias
  addWebpackAlias({
    "~": path.resolve(__dirname, 'src')
  })
)