const path = require('path')

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js'
  },

  resolve: {
    // Indicates that stuff like "import App from './App'" can just add the following extensions to find the file.
    // For some reason, this is necessary when using babel to transpile typescript :/
    extensions: ['.jsx', '.js', '.ts', ".tsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }
    ] 
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, './build')
    }
  }
}
