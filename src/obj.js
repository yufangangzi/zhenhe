var target = { a: 1, b: 1 };

var source1 = { b: 2, c: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target)

//assign方法有很多用处。
//为对象添加属性
class Point {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }
}
//为对象添加方法
//var SomeClass={};
//Object.assign(SomeClass.prototype, {
//    someMethod(arg1, arg2) {
//
//    },
//    anotherMethod() {
//
//    }
//});
//克隆对象


//rest对象
function add(...values) {
    let sum = 0;

    for (var val of values) {
        sum += val;
    }

    return sum;
}

 // 10
console.log(add(2, 5, 3))

//(...)三个点可以将一个数组解析开
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
        console.log(item);
    });
}

var a = [6];
push(a, 1, 2, 3)
console.log(a)


var nodeList = document.querySelectorAll('div');
var array = [...nodeList];
console.log(array)

//箭头函数
//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
var f = () => 5;
// 等同于
var f = function (){ return 5 };

var sum = (num1, num2) => num1 + num2;
// 等同于
var sum = function(num1, num2) {
    return num1 + num2;
};
//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

var sum = (num1, num2) => { return num1 + num2; }
//由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var getTempItem = id => ({ id: id, name: "Temp" });

var handler = {

    id: "123456",

    init: function() {
        document.addEventListener("click",
            event => this.doSomething(event.type), false);
    },

    doSomething: function(type) {
        console.log("Handling " + type  + " for " + this.id);
    }
};





