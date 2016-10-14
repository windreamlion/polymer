import React from 'react';
import ReactDOM from 'react-dom';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './style.scss';


var doc = <div className={s.title}>Hello World</div>;

withStyles(doc,s)

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function asyncPrint(value, ms) {
    await timeout(ms);
    console.log(value)
}

asyncPrint('hello world', 5000);

function decorateArmour(target, key, descriptor) {
    const method = descriptor.value;
    let moreDef = 100;
    let ret;
    descriptor.value = (...args)=>{
        args[0] += moreDef;
        ret = method.apply(target, args);
        return ret;
    }
    return descriptor;
}

class Man{
    constructor(def = 2,atk = 3,hp = 3){
        this.init(def,atk,hp);
    }

    // @decorateArmour
    init(def,atk,hp){
        this.def = def; // 防御值
        this.atk = atk;  // 攻击力
        this.hp = hp;  // 血量
    }

    toString(){
        return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
    }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);


ReactDOM.render(doc, document.getElementById('container'));
