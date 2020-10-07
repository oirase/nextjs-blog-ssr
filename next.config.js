const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '~': './src'
    }
  },
  module: {
    rules: [
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
      }
    ]
  }
}
