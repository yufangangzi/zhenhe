define(function(require, exports, module) {
    // 通过 require 引入依赖

    var Route={};
    Route.router=function(id){
        var goTo= function (obj) {
            $.ajax({
                url:obj.url,
                type:'get',
                dataType:'html',
                success:function(data){
                    document.getElementById(id).innerHTML=data;
                    addSrc(obj.src)
                },
                error:function(err){
                    console.log(err)
                }
            })
        };
        var addSrc=function (ary){
            ary.forEach(function(list,index){
                console.log(list)
            })
        };
        this.goTo = goTo;
        this.addSrc = addSrc;
    };
    // 或者通过 module.exports 提供整个接口
    module.exports =Route

});
