var express = require('express');
var path=require('path');
var bodyParser=require("body-parser");
var cookieParser=require("cookie-parser");
var multer=require("multer");

var app=express();

//指定文件默认目录
app.use(express.static(__dirname));

app.get('/', function(req, res){
    res.sendfile('./index.html',{root:__dirname})
});







app.listen(8888);
