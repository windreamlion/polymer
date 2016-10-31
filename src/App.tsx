/**
 * Created by lion on 31/10/2016.
 */

import * as React from 'react';
import {Component} from 'react';
import * as ReactDOM from 'react-dom'

import TweenMax from 'gsap';

import Dog from './farm/Dog'
// // import Dog = farm.Dog
// //
var dog = new Dog('candy');
// //
dog.move();

TweenMax.delayedCall(1,()=>console.log("sfasdfasdf"))


let doc = <div>Hello World</div>;

// console.log(doc)

ReactDOM.render(doc,document.getElementById('container'))


