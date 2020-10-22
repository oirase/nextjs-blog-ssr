const withTypescript = require('@zeit/next-typescript')
const path = require('path')
const Dotenv = require('dotenv-webpack')
const node_env = process.env.NODE_ENV || 'dev'

module.exports = {
  resolve: {
    alias: {
      '~': './src',
      'env': node_env
    }
  },
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]
    return config
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
