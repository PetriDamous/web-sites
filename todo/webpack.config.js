const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: process.env.MODE,
    entry: './src/app.js',
    output: {      
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public/scripts'),
      clean: true
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
      compress: true,
      open: false,
      hot: true
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {loader: 'babel-loader'}
            ],
        },
      ],
    },

    devtool: 'source-map'
};