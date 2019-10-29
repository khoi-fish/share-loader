const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src/index.tsx'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'core.js',
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              useBabel: true,
              babelOptions: {
                babelrc: false,
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        browsers: ['last 2 versions', 'not ie 10', '> 0.5%'],
                      },
                    },
                  ],
                ],
              },
              babelCore: '@babel/core',
            },
          },
        ],
      },
      {
        test: /\.js?$/,
        use: [
          {
            loader: 'share-loader-custom',
            options: {
              modules: ['@material-ui/core', 'react', 'react-dom'],
              exclude: [],
              namespace: 'sample',
            },
          },
        ],
      },
    ],
  },

  resolveLoader: {
    alias: {
      'share-loader-custom': path.join(__dirname, '../index'),
    },
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
}
