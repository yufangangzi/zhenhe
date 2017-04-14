
import $ from 'jquery'
export default function(url,call){
    $.ajax({
        url:url,
        type:'get',
        timeout:'100000',
        dataType:'json',
        success:function(data){
            call(data)
        },
        error:function(){

        }
    })
}
