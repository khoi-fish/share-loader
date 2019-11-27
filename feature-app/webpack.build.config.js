const path = require('path')
const merge = require('webpack-merge')
const devConfig = require('./webpack.dev.config.js')
const packageJson = require('./package.json')
const { Externals } = require('../index')

module.exports = env => {
  return merge(devConfig, {
    mode: 'production',
    entry: './src/microfrontend.ts',
    externals: [
      Externals({
        namespace: 'sample',
        // Specify dependencies you want to share with the core app
        modules: ['@material-ui/core', 'react', 'react-dom'],
      }),
    ],
    output: {
      library: ['sample', packageJson.name],
      libraryTarget: 'umd',
      filename: `${packageJson.name}.js`,
      path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
      minimize: false,
    },
  })
}
