module.exports = {
  ...require('./jest-common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['<rootDir>/pages/api/__tests__/**/*.(j|t)s(x)?'],
}
