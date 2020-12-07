module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js', '!**/src/**/*.stories.js'],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/',
    '/static/',
    '/public/'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/coverage/',
    '/public/',
    '/.cache/',
    '/__mocks__/',
    '/static/'
  ],
  projects: [
    './jest.scss.js',
    './jest.lint.js',
    './jest.client.js',
    './jest.storybook.js'
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
  }
};
