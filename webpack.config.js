module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: './main.js',
  output: {
      filename: 'bundle.js'
  },
  module: {
      rules : [
          { test: /\.js?/, loader: 'bable-loader', exclude: /node_modules/ }
      ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
  ],
};
