var path = require('path')
var entryPath = path.join(__dirname, 'src');
var outputPath = path.join(__dirname, 'dist');

module.exports = {
  entry: path.join(entryPath, 'app.js'),
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputPath
  },
  resolve: {
    extensions: ['.jsx', '.js']
  }
}