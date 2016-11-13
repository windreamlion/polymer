/**
 * Created by lion on 31/10/2016.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import Dog from "./farm/Dog";
import {TweenMax, TimelineMax} from "./modules/greensock/";
import {Observable} from "rxjs";
import ToolButton from "./toolbox/ToolButton";
// import {plunk} from "rxjs/";
// import {ModifiersPlugin} from "./modules/greensock/plugins";
// import Rx from 'rxjs';
// import { of } from 'rxjs/observable/of';


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
        // console.log(obj.a)
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
// var count:Number = 0;
let observable = Observable.fromEvent(document, 'click')
    .throttleTime(1000)
    .pluck('clientX')
    .subscribe((x)=>console.log("value:", x), null, ()=>console.log("complete"))

let doc: any = <ToolButton/>;

// console.log(doc)

ReactDOM.render(doc, document.getElementById('container'))


