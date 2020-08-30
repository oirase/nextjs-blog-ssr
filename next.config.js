
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        customDevKey: 'my-dev-value',
      }
    }
  }

  return {
    env: {
        customKey: 'my-value',
    }
  }
}
