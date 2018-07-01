const HtmlWebPackPlugin = require("html-webpack-plugin")
const path = require("path")

const htmlPlugin = new HtmlWebPackPlugin({
  template: "src/index.html",
  filename: "index.html"
})

const config = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]-[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          },
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?importLoader=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            'transform-react-jsx',
            [
              'react-css-modules',
              {
                webpackHotModuleReloading: true,
                exclude: 'node_modules',
                generateScopedName: '[name]__[local]___[hash:base64:5]',
                filetypes: {
                  '.scss': {
                    syntax: 'postcss-scss',
                    plugins: ['postcss-nesting', 'postcss-css-variables']
                  }
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    htmlPlugin
  ],
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/Components'),
      Assets: path.resolve(__dirname, 'src/Assets')
    },
    extensions: ['.js', '.scss', '.svg']
  }
}

module.exports = config
