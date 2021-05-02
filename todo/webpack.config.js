const path = require('path')

module.exports = {
    mode: process.env.MODE,
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
      open: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: [
            {loader: 'babel-loader'},
            {loader: "source-map-loader"}
            ],
        },
      ],
    },
    devtool: 'source-map'
};