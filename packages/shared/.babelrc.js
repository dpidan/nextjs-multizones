module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  ignore: ['dist', 'node_modules'],
  plugins: [
    "styled-jsx/babel"
  ]
};
