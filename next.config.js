
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        customKey: 'my-value',
      }
    }
  }

  return {
    env: {
        customKey: 'my-value',
    }
  }
}
