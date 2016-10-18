

import webpack from 'webpack';
import {prodConfig} from './webpack.config';
// console.log(prodConfig)

// async function build() {
//     await webpack(prodConfig);
//     await console.log('Build Complete');
// };

webpack(prodConfig).run(function (err,state) {
    // console.log(`err:${err} && state:${state}`);
})
// build();