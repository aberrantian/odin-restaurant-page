const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
//    home: './src/home-tab.js',
//    menu: './src/menu-tab.js',
//    contact: './src/contact-tab.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
	test: /\.(png|svg|jpg|jpeg|gif)$/i,
	type: 'asset/resource'
      },
      {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader'],
      }
    ]
  },
};
