//http://idea.qinxi1992.cn/
//https://msdn.microsoft.com/zh-cn/library/dn858243(v=vs.94).aspx
//https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
//https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage
//获取url信息
function url(name) {   //获取url 地址传的数据
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return (r[2]);
    return null;
}
function G(id){return document.getElementById(id);}
function S(id){G(id).style.visibility = 'visible';}
function H(id){G(id).style.visibility = 'hidden';}
function Show(id){G(id).style.display = 'block';}
function Hide(id){G(id).style.display = 'none';}

//scrollIntoView 作用就是起着锚点链接的作用。
//还可以这样写：直接写在href里,<a href="point9.scrollIntoView(false)">point9是相应div的ID名< /a>
//document.getElementById('id').scrollIntoView()

//数组的总结
//map映射一个新的数组
var array =[1,2,3,4].map(function(item){  //map映射一个新的数组
    return item * item;
});
console.log(array);

//filter 过滤
var data = [0, 1, 2, 3];
var arrayFilter = data.filter(function(item) {  //filter过滤数组
    return item>=2;
});
console.log(arrayFilter);


var sum = [1, 2, 3, 4].reduce(function (previous, current, index, array) { //迭代
    console.log(previous+'s'+current+'s'+index+'s'+array)
    return previous + current;
});

console.log(sum);

//输出数组的key
var arr = ["a", "b", "c"];
console.log(Object.keys(arr));

//将数组转为字符串
var a, b;
a = new Array(0,1,2,3,4);
b = a.join("-");
console.log(b)

//复制一个数组

var f=[1,2,3,4,5,6];
var f1=f.slice();
console.log(f1);

//some遍历数组
var numbers = [1, 15, 3, 13, 11, 23];
var evens = numbers.some(function(value,index,array){
    if(value%2==0){
        return true
    }
});
console.log(evens);

//every遍历数组

var numbers2 = [2, 12, 4, 14, 16, 24];
var evens2 = numbers2.every(function(value,index,array){
    if(value%2==0){
        return true
    }
});
console.log(evens2);

//splice删除数组中的元素  或者替换元素

var arr = new Array("4", "11", "2", "10", "3", "1");
arr.splice(2, 2, "21", "31");
//从数组索引为2开始  删除2个元素   在删除的地方插入 21 和31

console.log(arr);


//变量中改变this    call apply bind

this.x = 9;
var module = {
    x: 81,
    getX: function() {
        return this.x;
    }
};
var modu={
    x:88
}
module.getX(); // 81
var getX = module.getX;
getX(); // 9, 因为在这个例子中，"this"指向全局对象
// 创建一个'this'绑定到module的函数
var boundGetX = getX.bind(modu);
console.log(boundGetX()); // 81


/*
*
*1）创建新节点
 createDocumentFragment() //创建一个DOM片段
 createElement() //创建一个具体的元素
 createTextNode() //创建一个文本节点
 2）添加、移除、替换、插入
 appendChild() //添加
 removeChild() //移除
 replaceChild() //替换
 insertBefore() //插入
 3）查找
 getElementsByTagName() //通过标签名称
 getElementsByName() //通过元素的Name属性的值
 getElementById() //通过元素Id，唯一性
*
* */








