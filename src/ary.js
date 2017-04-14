//Array.from() 可以将两类转化为数组 ，并且接受第二个参数对每个值做处理

var obj={
    0:'34',
    1:'35'
};
var ary1=Array.from(obj);
console.log(ary1)

//Array.of()方法用于将一组值，转换为数组。
console.log(Array.of(2,3,5,7));


//数组实例的find()和findIndex()

var a=[1, 5, 10, 15].find(function(value, index, arr) {
    return value > 9;
}) // 10
console.log(a)


  var b=[1, 5, 10, 15].findIndex(function(value, index, arr) {
    return value > 9;
}) // 2
console.log(b);


