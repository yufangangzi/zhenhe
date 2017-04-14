var comp = require('./common.js');
import ajax from './ajax.js'
import array from './ary.js';
import object from './obj.js';

import "./css/index.css";
import "./css/post.css";

import {s} from './sum.js';

ajax("/list",function(data){
    console.log(data)
})