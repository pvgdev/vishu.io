const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '.'),
  projects: [
    '<rootDir>/test/jest.lint.js',
    '<rootDir>/test/jest.server.js',
    '<rootDir>/test/jest.client.js',
  ],
  watchPlugins: [
    'jest-watch-select-projects',
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}
