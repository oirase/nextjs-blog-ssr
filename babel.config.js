{
  "presets": [
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
  ],
  "plugins": [
    [
      "module-resolver", {
        "alias": {
          "~": "./src"
        }
      }
    ]
  ],
  env: {
      test: {
          presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
      },
  },
}
