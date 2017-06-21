var comp = require('./common.js');
import ajax from './ajax.js'
import array from './ary.js';
import object from './obj.js';

import "./css/index.css";
import "./css/post.css";

import {s} from './sum.js';

ajax("/list",function(data){
    console.log(data)
});
function wash(resolve){
    console.log('开始洗衣服...');
    setTimeout(()=>{
        console.log('洗完了！');
        resolve('一堆洗干净的衣服');
    }, 2000);
}
function hang(clothes){
    console.log('开始晾衣服...');
    /*...晾衣服中...*/
    return new Promise(function(resolve,reject){
        console.log('晾衣服ing')
        setTimeout(function(){
            console.log('晾衣服wancheng')
            resolve('一堆晾好的衣服')
        },1000)

    })
}

function dry(clothes){
    console.log('等衣服干...');
    /*...晾干中...*/
    console.log(clothes+'晾干了！');
    return '一堆晾干的衣服';
}

function pickup(clothes){
    console.log('开始收衣服...');
    /*...收衣服中...*/
    console.log(clothes+'收完了！');
}
var promise = new Promise(wash);
promise.then(hang).then(dry).then(pickup);
