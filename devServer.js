
// require('core-js/fn/object/assign');

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';



const {devConfig} = require('./webpack.config');
console.log('devConfig:',devConfig)

new WebpackDevServer(webpack(devConfig), devConfig.devServer)
    .listen(devConfig.port, '0.0.0.0', function (err) {
          if (err) {
            console.log(err);
          }
          console.log('Serving from http://localhost:' + devConfig.port);
        }
    );