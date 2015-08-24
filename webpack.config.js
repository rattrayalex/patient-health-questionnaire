module.exports = {

  context: __dirname + "/src",
  entry: "./index.js",

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [

      // process js with Babel for ES2015
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"],
      },

      // use cssnext for fancy css
      {
        test:   /\.css$/,
        loader: "style-loader!css-loader!cssnext-loader"
      },

      // inline small images (<8k)
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },

    ]
  },
}
