window.onload = function () {
    let num = 5*5*5;
    console.log(data.length);
    let oList = document.getElementById("list"),
        oLi = oList.children;

    //生成
    {
        for(let i = 0; i < num; i++){
            let oL = document.createElement("li");
            if(i < data.length){
                let oA = document.createElement('a');
                oA.href = data[i].href;
                oA.target = "_blank";
                oA.innerHTML = "JS案例";
                oL.appendChild(oA);
            }

            let x,y,z;
            x = Math.random()*4000 - 2000;
            y = Math.random()*3000 - 2000;
            z = Math.random()*4000 + 2000;
            oL.style.transform  = `translate3d(${x}px,${y}px,${z}px)`;
            oList.appendChild(oL);
        }
        setTimeout(Periodic,200);
    }

    //鼠标移动
    {
        //清除默认事件
        document.onselectstart = ()=>false;
        document.ondrag = ()=>false;

        let[initTZ,initRX,initRY] = [-5000,0,0];
        let timer;
        document.onmousedown = function (e) {
            cancelAnimationFrame(timer);
            let [lX,lY] = [e.clientX,e.clientY];
            let [nX,nY] = [0,0];
            let [disX,disY] = [0,0];
            this.onmousemove = function (e) {
                nX = e.clientX ;
                nY = e.clientY;

                disX = nX - lX;
                disY = nY - lY;
                initRX += disY*0.2;
                initRY += disX*0.2;
                lX = nX;
                lY = nY;

                oList.style.cssText = `transform:translateZ(${initTZ}px) rotateX(${-initRX}deg) rotateY(${initRY}deg)`;
            }
            this.onmouseup = function () {
                this.onmousemove = null;
                function fn(){
                    disX = disX*0.9;
                    disY = disY*0.9;
                    initRY += disX*0.15;
                    initRX += disY*0.15;
                    oList.style.cssText = `transform:translateZ(${initTZ}px) rotateX(${-initRX}deg) rotateY(${initRY}deg)`;
                    if(Math.abs(disX) < 0.1 && Math.abs(disY)< 0.1)return;
                    timer = requestAnimationFrame(fn);
                }
                timer = requestAnimationFrame(fn);
            }
        }

        //鼠标滚轮
        ~function (fn) {
            function f(e) {
                let d = e.wheelDelta/120 || -e.detail/3;
                fn.call(this,d)
            }
            let eName = document.onmousewheel === undefined?"DOMMouseScroll":"mousewheel";
            document.addEventListener(eName,f,false);
        }(function (d) {
            initTZ = initTZ+d*100;
            oList.style.cssText = `transform:translateZ(${initTZ}px) rotateX(${-initRX}deg) rotateY(${initRY}deg)`;
        });
    }

    //层级布局
    function Grid() {
        let length = oLi.length;
        if(!Grid.arr){
            Grid.arr = [];
            let gapX = 300 + oList.clientWidth,
                gapY = 300 + oList.clientHeight,
                gapZ = 1000;
            let val;

            for (let i = 0; i < length; i++) {
                oLi[i].x = i % 5;
                oLi[i].y = Math.floor(i % 25 / 5);
                oLi[i].z = Math.floor(i / 25);

                let difX = oLi[i].x - 2,
                    difY = oLi[i].y - 2,
                    difZ = 2 - oLi[i].z;

                val = `transform:translate3d(${difX * gapX}px,${difY * gapY}px,${difZ * gapZ}px)`;
                Grid.arr[i] = val;
                oLi[i].style = val;
            }
        }
        else{
            for (let i = 0; i < length; i++) {
                oLi[i].style = Grid.arr[i];
            }
        }
    }

    //环形布局
    function Annular() {
        let length = oLi.length;
        if(!Annular.arr){
            Annular.arr = [];
            const [round,t] = [5,20];
            let cen = length / 2;
            let num = Math.round(length / round);
            let lDeg = 360 / num;
            let val;

            for (let i = 0; i < length; i++) {
                val = `rotateY(${lDeg * i}deg) translateZ(1800px) translateY(${(i - cen) * t}px)`;
                oLi[i].style.transform = val;
                Annular.arr[i] = val;
            }
        }
        else{
            for (let i = 0; i < length; i++) {
                oLi[i].style.transform = Annular.arr[i];
            }
        }
    }
    
    //球体布局
    function Sphere() {
        const length = oLi.length;
        if(!Sphere.arr){
            Sphere.arr = [];
            let sArr = [1,3,7,9,11,14,21,16,12,10,9,7,4,1];
            const sLength = sArr.length;

            for(let i = 0; i < length; i++){
                let x = 1;
                let circle = 0;
                let  num = 0;
                let val;
                for(let j = 0; j < sArr.length; j++) {
                    if (i < x) {
                        num = sArr[j] - x + i;
                        circle = j;
                        break;
                    }
                    x += sArr[j + 1];
                }
                val = `transform:rotateY(${360/sArr[circle]*(num+1.4)}deg) rotateX(${90-circle*(180 / (sLength-1))}deg) translateZ(1800px)`;
                oLi[i].style = val;
                Sphere.arr[i] = val;
            }
        }
        else{
            for (let i = 0; i < length; i++) {
                oLi[i].style = Sphere.arr[i];
            }
        }
    }

    //元素周期表
    function Periodic() {
        let length = oLi.length;
        if(!Periodic.arr){
            Periodic.arr = [];
            let mX = 18/2;
            let mY = Math.ceil(9/2);
            let arr = [
                {x:0,y:0},
                {x:17,y:0},
                {x:0,y:1},
                {x:1,y:1},
                {x:12,y:1},
                {x:13,y:1},
                {x:14,y:1},
                {x:15,y:1},
                {x:16,y:1},
                {x:17,y:1},
                {x:0,y:2},
                {x:1,y:2},
                {x:12,y:2},
                {x:13,y:2},
                {x:14,y:2},
                {x:15,y:2},
                {x:16,y:2},
                {x:17,y:2},
            ];
            let val;
            for(let i = 0; i < length; i++){
                let difX,difY;
                if(i <18){
                    difX = arr[i].x - mX;
                    difY = arr[i].y - mY;
                }
                else{
                    difX = Math.floor((i-18)%18) - mX;
                    difY = Math.floor((i-18)/18)+3 - mY;
                }
                let tX = difX*350;
                let tY = difY*400;
                val = `transform:translate3d(${tX}px,${tY}px,0px)`;
                oLi[i].style = val;
                Periodic.arr[i] = val;
            }
        }
        else{
            for (let i = 0; i < length; i++) {
                oLi[i].style = Periodic.arr[i];
            }
        }
    }

    //点击事件
    {
        let arr = [Periodic,Grid,Annular,Sphere];
        let btn = document.getElementById("leftBtn"),
            bLi = btn.getElementsByTagName("li"),
            length = bLi.length;

        for(let i = 0; i <length; i++){
            bLi[i].index = i;
            bLi[i].onclick = function () {
                arr[this.index]();
            }
        }
    }
};

//实验出的一些奇怪的造型
// oLi[i].style = `transform:rotateY(${360/sArr[j]*num}deg) rotateX(${-360/j*(j-6)}deg) translateZ(1800px) translateY(${Y}px)`;
// oLi[i].style = `transform:rotateY(${360/sArr[j]*num}deg) rotateX(${-360/12*j}deg) translateZ(${100*(j-6)}px) translateY(${Y}px)`;
// oLi[i].style = `transform:rotateY(${360/sArr[j]*num}deg) translateZ(${100*(j-6)}px) translateY(${Y}px)`;
// oLi[i].style = `transform:rotateY(${360/sArr[j]*num}deg) translateZ(${1800-(Math.abs(6-j)*300)}px) translateY(${Y}px) rotateX(${(90/6)*(6-j)}deg)`;
// oLi[i].style = `transform:rotateY(${360/sArr[circle]*num*0.5}deg) rotateX(${90-circle*(180 / (sLength-1))}deg) translateZ(1800px)`;