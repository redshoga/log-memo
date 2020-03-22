const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public/')
  }
};
