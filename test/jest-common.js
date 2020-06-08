const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  moduleDirectories: ['node_modules', path.join(__dirname, '../')],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./style-mock.js'),
  },
  watchPlugins: ['jest-watch-select-projects'],
}
