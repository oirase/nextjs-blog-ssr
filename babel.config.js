module.exports = (api) => {
  api.cache(true)
  const presets = [
    [
      "next/babel",
      {
        "styled-jsx": {
          "plugins": [
            "styled-jsx-plugin-sass"
          ]
        }
      }
    ]
  ]
  const plugins = [
    [
      "module-resolver", {
        "alias": {
          "~": "./src"
        }
      }
    ]
  ]
  const env = {
      test: {
          presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
      }
  }
  return {
    presets,
    plugins,
    env
  }
}

