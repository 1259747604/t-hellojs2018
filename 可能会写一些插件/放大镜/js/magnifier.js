(function ($,window) {
    let ele = null,//选定元素
        length = 0,//图片列表长
        $ul = null,//承载图片的ul
        $imgLi = null,//图片列表
        $img = null,//图片
        $preview = null,//预览框
        $preCover = null,//预览图包裹div
        $previewImg = null,//预览图
        mask = null,//遮罩
        viewWH = 350,//预览图宽或高
        $preB = null,//上一个按钮
        $nextB = null,//下一个按钮
        imgIndex = 0,//图片索引
        initShow = 4,//最初显示的最大索引
        maxShow = 4,//最初显示的总数 从0计数
        transX = 58,//ul偏移距离
        maxWH = 54,//图片的宽或高
        maskWH = 0,//覆盖的宽高
        initmaskWH = 0,//初始化覆盖的宽高
        ratio = 0,//预览图片比
        maskRatioX = 0,//图片与遮罩层x轴比
        maskRatioY = 0,//图片与遮罩层y轴比
        $bigImg = null,//大图框，
        bigWH = 0,//大图框的大小
        imgArr = [],//存图片比例
        loadName = 'load',//初始化时的类名
        active = 'active';//图片列表选中时的样式
    $.fn.extend({
        preview(options = {}){
            if(this.length === 0){
                throw new Error('没有指定元素')
            }
            init.call(this[0],options)
        }
    });
    /*初始化函数*/
    function init(options) {
        initmaskWH = options.initmaskWH || 230;
        bigWH = options.bigWH || 500;

        ele = this;//指定元素
        $preB = $(ele).find('#img_list').find('.btn #pre_btn');//上一个按钮
        $nextB = $(ele).find('#img_list').find('.btn #next_btn');//下一个按钮
        $ul = $(ele).find('#img_list').find('.item_list ul');//下一个按钮
        $imgLi = $(ele).find('#img_list').find('.item_list ul li');//图片列表
        $img = $(ele).find('#img_list').find('.item_list ul li img');//图片
        $preview = $(ele).find('#img_preview');
        $bigImg = $(ele).find('#big_img');
        $preCover = $preview.find('.img_cover');
        $previewImg = $preview.find('.img_cover img');

        length = $imgLi.length;

        $bigImg.width(bigWH);
        $bigImg.height(bigWH);
        $bigImg.hide();

        $imgLi.eq(imgIndex).addClass(active);

        $preB.removeClass('hoverBtn');

        mouseHoverPre();
        checkLoad();
    }

    /*检查图片加载*/
    function checkLoad() {
        $imgLi.each((index,item) => {
            let img = $(item).find('img');

            img[0].complete?load.call(img[0]):img[0].onload = load;
        })
    }

    /*加载函数*/
    function load() {
        const width = $(this).width();
        const height = $(this).height();
        this[width > height?"width":"height"] = maxWH;
        this.style.cssText = `${width > height?"width":"height"}:${maxWH}px`;
        width/height && $(this).parent().addClass(loadName);
        imgArr.push(width/height);

        //检测是否加载完成
        for(let i = 0; i < length; i++){
            if(!imgArr[i])return;
        }
        //加载完成
        afterLoad();
    }

    /*加载完成执行*/
    function afterLoad() {
        preview(imgIndex);
        pre();
        next();
        mouseHoverLi();
    }

    /*预览图*/
    /**
     * @param i 图片索引
     */
    function preview(i) {
        ratio = $img.eq(i).width()/$img.eq(i).height();
        if(ratio > 1){
            $previewImg[0].width = viewWH;
            $previewImg[0].height = viewWH/ratio;
        }
        else{
            $previewImg[0].width = viewWH*ratio;
            $previewImg[0].height = viewWH;
        }
        $previewImg.attr('src',$img.eq(i).data('preview')?$img.eq(i).data('preview'):$img.eq(i).attr('src'));
        // $img.eq(i).data('preview') && $previewImg.attr('src',$img.eq(i).data('preview')) || $previewImg.attr('src',$img.eq(i).attr('src'));
    }

    /*点击上一个按钮*/
    function pre() {
        $preB.on('click',function () {
            if(initShow < maxShow){
                return;
            }
            initShow --;
            initShow = Math.max(maxShow,initShow);
            transformUl(initShow - maxShow);
            isStart();
        })
    }
    
    /*点击下一个按钮*/
    function next() {
        $nextB.on('click',function () {
            if(initShow > length-1){
                return;
            }
            initShow++;
            initShow = Math.min(length-1,initShow);
            transformUl(initShow - maxShow);
            isEnd();
        })
    }
    
    /*鼠标移入图片列表*/
    function mouseHoverLi() {
        $imgLi.each((index,item) => {
            $(item).on('mouseenter',function () {
                imgIndex = index;
                activeItem(imgIndex);
            });
        })
    }

    /*显示当前选择*/
    /**
     * @param i 激活的索引
     */
    function activeItem(i) {
        preview(i);
        $imgLi.removeClass(active);
        $imgLi.eq(i).addClass(active);
    }

    /*ul移动*/
    /**
     * @param i 移动的索引
     */
    function transformUl(i) {
        $ul.css({
            transform:`translateX(${-transX*i}px)`
        });
    }

    /*判断是否是第一个或是最后一个*/
    function isEnd() {
        $preB.addClass('hoverBtn');
        $nextB[initShow === length-1?`removeClass`:'addClass']('hoverBtn');
    }
    function isStart() {
        $nextB.addClass('hoverBtn');
        $preB[initShow === maxShow?`removeClass`:'addClass']('hoverBtn');
    }

    /*移入预览框*/
    function mouseHoverPre() {
        $preCover.hover(function () {
            const w = $(this).width();
            const h = $(this).height();
            if(w < maskWH){
                maskWH = w/2;
            }
            else if(h < maskWH){
                maskWH = h/2;
            }
            else {
                maskWH = initmaskWH;
            }
            mask = document.createElement('div');
            mask.className = 'mask';
            mask.style.width  = mask.style.height = `${maskWH}px`;
            this.appendChild(mask);
            maskRatioX = w/maskWH;
            maskRatioY = h/maskWH;
            showBig();
            mouseMove.call(this,w,h,maskWH/2);
        },function () {
            maskWH = initmaskWH;
            $bigImg.hide();
            $(this).off('mousemove');
            mask && this.removeChild(mask);
        })
    }
    /*鼠标框内移动*/
    /**
     *
     * @param w 图片宽
     * @param h 图片高
     * @param half 遮罩层宽度一半
     */
    function mouseMove(w,h,half) {
        const [pX,pY] = [$(this).offset().left,$(this).offset().top];
        $(this).on('mousemove',function (e) {
            let x = e.pageX - pX - half;
            let y = e.pageY - pY - half;
            x = Math.max(0,x);
            x = Math.min(w - maskWH,x);
            y = Math.max(0,y);
            y = Math.min(h - maskWH,y);
            $(mask).css({
                transform:`translate3d(${x}px,${y}px,0)`,
            });
            $bigImg.css({
                backgroundPositionX:-x*(bigWH/maskWH),
                backgroundPositionY:-y*(bigWH/maskWH),
            });
        })
    }
    /*显示大图*/
    function showBig() {
        $bigImg.show();
        $bigImg.css({
            backgroundImage:`url(${$img.eq(imgIndex).data('big') || $previewImg.attr('src')})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:`${maskRatioX*100}% ${maskRatioY*100}%`,
        });
    }
})(jQuery,window);