    //随机颜色
    function color() {
        var str ="#";
        for(var b = 0; b < 6 ;b++){
            str += parseInt(Math.random()*16).toString(16)+"";
        }
        return str;
    }


    //最大边界处理
    var maxwidth,maxheight;
    window.onresize = docha();//可视窗口改变时执行函数

    function docha() {
        //获取球的可到达最大宽高
        maxwidth = document.documentElement.clientWidth - 100;
        maxheight = document.documentElement.clientHeight -100;
        return docha;
    }
    //////////////////////////////////////////////////
    /*
       1.obj  碰撞对象
       2.x   向左的速度 默认10 可省略
       3.y   向右的速度 默认10  可省略
    * */

    function f(obj,ox,oy) {
    var x = ox || 10;
    var y = oy || 10;



    //随机定位
    obj.style.left = parseInt(Math.random()*100) + "px";
    obj.style.top = parseInt(Math.random()*100) + "px";



    //移动函数
    ~function move() {
        window.requestAnimationFrame = window.requestAnimationFrame || function (a) {return setTimeout(a,1000/60)  };
        window.cancelAnimationFrame = window.cancelAnimationFrame || clearTimeout;


        //球的位置
        var left = obj.offsetLeft + x;
        var top = obj.offsetTop + y;

        //到达最大或最小边界时取反
        if(left >= maxwidth){
            left = maxwidth;
            x = -x;
        }
        if(left <= 0){
            x = -x;
        }
        if(top >= maxheight){
            top = maxheight;
            y = -y;
        }
        if(top <= 0){
            y = -y;
        }

        //碰撞边界后变色
        if(left === 0 || top === 0 || left === maxwidth || top === maxheight ){
            // obj.style.background = "-webkit-radial-gradient(#ffffff,"+color()+")";
            obj.style.background = color();
        }

        //执行动画
        requestAnimationFrame(move);

        //赋值
        obj.style.left = left + "px";
        obj.style.top = top + "px";
    }();
}