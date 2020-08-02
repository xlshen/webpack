const Webpack = require('webpack');
const webpackConfig = require('./webpack.config');

Webpack(webpackConfig, (error) => {
  if (error) {
    console.error(error);
  }
  console.log('Run build successful');
});

