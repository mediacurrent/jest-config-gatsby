# jest-config-gatsby
Jest configuration with Gatsby and Storybook can be tricky.  This is Mediacurrent's default setup.

## Install 
`npm install --save-dev @mediacurrent/jest-config-gatsby`

## Extend
To use it without changes, create a `jest.config.js` file with the following code:

```
const config = require('@mediacurrent/jest-config-gatsby')
module.exports = config
```

## Override

To use the base config, but override some settings, your `jest.config.js` should look like this:

```
const config = require('@mediacurrent/jest-config-gatsby')
module.exports = {
  ...config,
  // Overrides
  'rootDir': './',
  "testEnvironment": "node"
}
```