{
    let can = document.getElementsByTagName("canvas")[0];
    let cxt = can.getContext("2d");
    /*canvas尺寸*/
    window.onresize = resizeS;
    resizeS();
    function resizeS() {
        can.width = window.innerWidth;
        can.height = window.innerHeight;
    }

    /*鼠标*/
    let mou = {
        x:null,
        y:null,
        max:20000
    };
    window.addEventListener("mousemove",function (e) {
        e = e || window.event;

        mou.x = e.clientX;
        mou.y = e.clientY;
    });
    window.addEventListener("mouseout",function (e) {
        mou.x = null;
        mou.y = null;
    });

    /*创造粒子*/
    let parArr = [];
    gen();
    function gen() {
        for(let i = 0; i < 300; i++){
            let x = Math.random()*can.width,
                y = Math.random()*can.height,
                xs = Math.random()*2-1,
                ys = Math.random()*2-1;
            parArr[i] = {
                x:x,
                y:y,
                xs:xs,
                ys:ys,
                max:6000
            };
        }
    }
    drawP();
    function drawP() {
        cxt.clearRect(0,0,can.width,can.height);

        let finArr = [mou].concat(parArr);

        parArr.forEach(function (item) {
            /*x,y距离*/
            item.x += item.xs;
            item.y += item.ys;

            item.xs *= (item.x > can.width || item.x < 0)?-1:1;
            item.ys *= (item.y > can.height || item.y < 0)?-1:1;

            /*画点*/
            cxt.fillStyle = "red";
            cxt.fillRect(item.x-0.5,item.y-0.5,1,1);

            /*连线*/
            for( let i = 0; i < finArr.length; i++){
                let cur = finArr[i];
                if(cur === item || cur.x === null || cur.y === null){
                    continue;
                }

                let disX = cur.x - item.x,
                    disY = cur.y - item.y;

                let dis = disX*disX + disY*disY;
                let scale;
                if(dis < cur.max){
                    if(cur === mou && dis > cur.max/2){
                        item.x += disX*0.03;
                        item.y += disY*0.03;
                    }
                    scale = (cur.max - dis)/cur.max;
                    cxt.beginPath();
                    cxt.lineWidth = scale/2;
                    let c = cxt.createLinearGradient(item.x,item.y,cur.x,cur.y);
                        c.addColorStop(0,"#e9a1ea");
                        c.addColorStop(0.5,"#40a3e5");
                        c.addColorStop(1,"orange");
                    cxt.strokeStyle = c;
                    cxt.moveTo(item.x,item.y);
                    cxt.lineTo(cur.x,cur.y);
                    cxt.stroke();
                }
            }
            finArr.splice(finArr.indexOf(item),1);
        });
        requestAnimationFrame(drawP);
    }
}


