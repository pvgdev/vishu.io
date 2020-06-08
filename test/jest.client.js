module.exports = {
  ...require('./jest-common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  snapshotSerializers: ['jest-styled-components'],
  testMatch: ['<rootDir>/pages/**/__tests__/**/*.(j|t)s(x)?'],
  modulePathIgnorePatterns: ['<rootDir>/pages/api'],
}
