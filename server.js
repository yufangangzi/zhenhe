var express = require('express');
var path=require('path');
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var multer=require("multer");
var http=require('http');


var app=express();

//指定文件默认目录
app.use(express.static(__dirname));
console.log(2);
app.get('/', function(req, res){
    res.sendfile('./index.html',{root:__dirname})
});
app.get('/list', function(req, res){
    httpGet('http://www.tlkg.com.cn/mobileWeb/activity/list.kg?status=1&type=0&start=0',function(info){
        res.send(info)
    })
});

function httpGet(url,call){
    http.get(url,function(res){
        var result='';
        res.on('data',function(data){
            result+=data.toString()
            console.log(result)
        })
        res.on('end',function(){
            call(result)
        })
    })
}







app.listen(8880);
