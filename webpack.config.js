const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      preact: path.resolve(__dirname, 'node_modules', 'preact'),
      'preact/hooks': path.resolve(__dirname, 'node_modules', 'preact', 'hooks'),
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000
  },
};
