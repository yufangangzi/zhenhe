define(function(require, exports, module) {

    // 通过 require 引入依赖

    var obj=require('../main/alert');
    var Router=require('../router/router');
    var Map=require('../router/map');
    var router=new Router.router('contain');
    var map=new Map.state();
    router.goTo(map.route('hello'));


    // 或者通过 module.exports 提供整个接口
    module.exports =obj

});
