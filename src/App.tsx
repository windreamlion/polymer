/**
 * Created by lion on 31/10/2016.
 */

///// <reference path="./modules/gs/index.d.ts" />

import * as React from 'react';
import {Component} from 'react';
import * as ReactDOM from 'react-dom'

import * as gs  from './modules/gs';
// var TweenMax = require("gsap")

import Dog from './farm/Dog'
// // import Dog = farm.Dog
// //
var dog = new Dog('candy');
// //
dog.move();

// gs.TweenLite.delayedCall(1,()=>console.log("sfasdfasdf"))


let doc = <div>Hello World</div>;

// console.log(doc)

ReactDOM.render(doc,document.getElementById('container'))


