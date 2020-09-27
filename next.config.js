const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = withTypescript({
  webpack(config, options) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': './src'
    }
/*
    config.entry = {
      ...config.entry,
      server: './server.ts'
    }
*/
    config.module.rules.push(
      {
        test: /(t|j)s[x]?$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
              failOnError: true,
            }
          }
        ]
      })

    return config
  }
})
