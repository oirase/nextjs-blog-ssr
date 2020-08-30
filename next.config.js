
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path')

module.exports = (phase, { defaultConfig }) => {

  const webpackConfig = {
    webpack: (config) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '~': path.resolve(__dirname + '/src')
      }
      return config
    }
  }

  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...defaultConfig,
      ...webpackConfig,
      env: {
        customDevKey: 'my-dev-value',
      }
    }
  }



  return {
    ...defaultConfig,
    ...webpackConfig,
    env: {
        customKey: 'my-pro-value',
    }
  }
}
