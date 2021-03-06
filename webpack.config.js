module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist',
    filename: "main.js",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  }
};
