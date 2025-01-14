const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'index.css' })],

  resolve: {
    // Indicates that stuff like "import App from './App'" can just add the following extensions to find the file.
    // For some reason, this is necessary when using babel to transpile typescript :/
    extensions: ['.jsx', '.js', '.ts', ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // Scss Loaders
      {
        test: /\.(s(a|c)ss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, './build')
    }
  }
}
