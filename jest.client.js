module.exports = {
  ...require('./jest.common'),
  displayName: 'src/',
  testMatch: ['../src/**/*.test.js'],
  testEnvironment: 'jest-environment-jsdom'
};
