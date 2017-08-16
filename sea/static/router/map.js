define(function(require, exports, module) {
    // 通过 require 引入依赖

    var Map={};
    Map.state=function(){
        var route=function(route){
            switch (route){
                case 'hello':
                    return {
                        url:'hello.html',
                        src:[
                            'src/hello.js'
                        ]
                    };
                    break
            }
        }
        this.route=route
    };
    // 或者通过 module.exports 提供整个接口
    module.exports =Map

});
