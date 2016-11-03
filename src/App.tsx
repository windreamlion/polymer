/**
 * Created by lion on 31/10/2016.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import Dog from "./farm/Dog";
import {TweenMax, TimelineMax,ModifiersPlugin} from "./modules/greensock/";
// import {ModifiersPlugin} from "./modules/greensock/plugins";


// ModifiersPlugin.activate('ModifiersPlugin');
// declare var TweenMax:any;
// import _ from 'lodash';
// import {TweenMax} from './greensock';
// var TweenMax = require("gsap")
// import TweenMax  from 'gsap'

// // import Dog = farm.Dog
// //
var dog = new Dog('candy');
// //
dog.move();

interface disObj {
    a: number
}

var obj: disObj = {a: 100}
// var obj: disObj = {a: 100}

var tl: TimelineMax = new TimelineMax({
    onUpdate: ()=> {
        console.log(obj.a)
    }
});
tl.to(obj, 2, {a: 200}).to(obj, 3, {a: 0})
    .add(TweenMax.to(obj, 3, {
        a: 500,
        modifiers: {
            a: function (a) {
                //snap to 45 degree increments
                return a * 100;
            }
        },
    }));
// TweenMax.delayedCall(1,()=>console.log("sfasdfasdf"))
// TweenMax.to(obj,3,{a:200,onUpdate:()=>{console.log(obj.a)},delay:1})


let doc = <div>Hello World</div>;

// console.log(doc)

ReactDOM.render(doc, document.getElementById('container'))


