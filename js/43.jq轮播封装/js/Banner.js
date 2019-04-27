$.fn.extend({
    banner:function (json) {
        //获取元素
        var $banner = this;
        var type = json.type || "fade";
        var pic = json.pic;
        var tab = json.tab;
        var tabType = json.tabType || "click";
        var lrBtn = json.lrBtn;
        var ifAuto = json.ifAuto || (json.ifAuto === false?false:true);
        var speed = json.speed || 1000;

        var length = $(pic).length, //获取轮播长度
            lastIndex = 0, //初始位置
            clicktime = 0,//初始点击时间
            timer1 = null, //自动轮播定时器
            timer2 = null;
        //jq对象
        var $pic = this.find(pic),
            $tab,
            tabtime,//延迟时间
            $lrBtn;
        //正则
        var typere = {
            fade : /^(\s)*fade$/i,
            slide :/^(\s)*slide$/i,
            seamless:/^(\s)*seamless$/i
        }//类型正则
        var tabtypere = {
            click :/(\s)*click$/,
            mouseenter : /(\s)*mouseenter$/
        }
        //初始化设置
        $banner[0].onselectstart = function () {
            return false;
        };
        if(typere.fade.test(type)){
            $pic.hide().eq(0).show();//除了第一个全部隐藏
        }
        else if(typere.slide.test(type)){
            var $parentUl = $pic.parent(),//父级
                 pWidth = $pic.width();//图片宽

            $parentUl.width((length+5)*pWidth).parent().css({overflow:"hidden"});//滚动长度及滚动父级超出隐藏
            $pic.css({
                position:"static",
                float:"left",
                width:pWidth
            });
        }
        else if(typere.seamless.test(type)){
            var $parentUl = $pic.parent(),//父级
                 pWidth = $pic.width();//图片宽

            $parentUl.width((length+5)*pWidth).css("margin-left",-pWidth).parent().css({overflow:"hidden"});//滚动长度及滚动父级超出隐藏
            $parentUl.append($pic.eq(0).clone(true,true));
            $parentUl.prepend($pic.eq(length-1).clone(true,true));//克隆添加
            $pic = $parentUl.children();//重新获取
            $pic.css({
                position:"static",
                float:"left",
                width:pWidth
            });
        }
        else{
            alert("此轮播type不能实现");
        }
        //鼠标滑入或点击tab
        if(tab){
            $tab = this.find(tab);
            $tab.eq(0).addClass("on");//tab按钮默认选中
            tabtime = tabtypere.click.test(tabType)?10:200;
            $tab[tabType](function () {
                var x = $(this).index();
                if(x !== lastIndex){
                    clearTimeout(timer1);
                    timer2 = setTimeout(change,tabtime,x);//延迟执行
                }
            });
        }
        //鼠标点击左右按钮
        if(btn){
            $lrBtn = this.find(lrBtn);
            $lrBtn.click(function () {
                if(new Date - clicktime > 300){
                    var x = lastIndex;
                    $(this).index()?x++:x--;
                    change(x);
                    clicktime = new Date();
                }
            });
        }
        //自动轮播
        if(ifAuto){
            $banner.hover(function () {
                clearInterval(timer1);
            },auto());
            function auto(){
                timer1 = setInterval(function () {
                    var x = lastIndex;
                    x++;
                    change(x);
                },speed);
                return auto;
            };
        }
        //变化函数
        function change(i) {
            var nowIndex = i+1;
            i %= length;
            if(i<0)i = length -1;
            var ifType = typere.fade.test(type);
            if(tab){
                $tab.eq(lastIndex).removeClass("on");
                $tab.eq(i).addClass("on");
            }
            if(ifType){
                $pic.eq(lastIndex).stop().fadeOut();
                lastIndex = i;
                $pic.eq(lastIndex).stop().fadeIn();
            }
            else{
                lastIndex = i;
                if(typere.seamless.test(type)){
                    $parentUl.stop().animate({
                        marginLeft:-(nowIndex*pWidth)
                    },speed/5,function () {
                        if(lastIndex === 0 || lastIndex === length -1){
                            $(this).css({
                                marginLeft: -(lastIndex+1)*pWidth
                            })
                        };
                    });
                }
                else if(typere.slide.test(type)){
                    $parentUl.stop().animate({
                        marginLeft:-(lastIndex*pWidth)
                    },speed/5);
                }
            }
        }
    }
});