
//设置模块路径 ：
require.config({
    paths : {
        // 后缀不能写 ：
        "jquery" : "https://cdn.bootcss.com/jquery/1.11.3/jquery",
        "cookie" : "./plugin/jq.cookie.min",
        "fly" : "./plugin/jquery.fly",
        "animate" : "./plugin/requestAnimationFrame",
        "randomNum" : "randomInt",
        "drag" : "drag"
        ,"css-js" : "./plugin/css"
    },
   //没生效  css  css    css  导不进来 *****************！！！！！！！！！！！！！！！！
    shim: {
        'css': {
            deps: ['css!../css/index']
        }
    },
})
// 导入依赖模块 ：
require(["jquery","cookie","fly","animate","randomNum","drag","css"],function($,cookie,fly,animate,randomNum,drag){
    
    // 页面加载执行 ：
    $(function(){

        // console.log($,cookie,fly,animate,randomNum);

        $.cookie('cart','123',{
            'expires' : 7,
            path : '/'
        })
        // $.removeCookie("username",{
        //     'expires' : 7 ,
        //     path : '/'
        // });
        console.log(randomNum.randomInt(30,100));

        // 物体移动 ：  css样式 必须设置  position：absolute ;
        drag.drag('box');



























        
    })
    
})