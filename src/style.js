/**
 * Created by lion on 10/18/16.
 */

import Please from 'pleasejs'

export var palette;

function init() {
    if (!palette) {
       palette = Please.make_scheme(
           {
               h: 145,
               s: .7,
               v: .6
           },
           {
               scheme_type: 'triadic',
               format: 'hex'
           })
    }
};

init();
