/*
    ./webpack.config.js
*/

const path = require('path');

/* ~~~~~ html-webpack-plugin ~~~~~~ */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  /* set our skeleton HTML as the template */
  template: './client/index.html',
  /* filename refers to the name of the HTML that the plugin will generate */
  filename: 'index.html',
  /* add any JavaScript into the bottom of the page, just before the closing body tag. */
  inject: 'body'
})
/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

module.exports = {
  /* bundler starts the bundling process */
  entry: './client/index.js',
  /* where the bundled Javascript code is to be saved. */
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    /* loaders: transformations that are applied on a file */
    loaders: [ /* list of loaders: https://webpack.github.io/docs/list-of-loaders.html */
      /* babel-loader goes through and transpiles every file that ends with a ".js" or ".jsx" */
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
