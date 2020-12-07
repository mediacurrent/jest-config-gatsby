const { rootDir } = require('./jest.common');

module.exports = {
  rootDir,
  runner: 'jest-runner-stylelint',
  displayName: 'lint:scss',
  testMatch: ['<rootDir>/src/**/*.scss'],
  moduleFileExtensions: ['scss']
};
