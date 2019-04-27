{
    const oRightM = document.getElementById("rightMenu"),
            oNewN = oRightM.getElementsByTagName("li")[0],
            oDel = oRightM.getElementsByTagName("li")[1],
            oRe = oRightM.getElementsByTagName("li")[2];

    const imgarr = ["./img/par1-msg-bg0.png","./img/par1-msg-bg1.png","./img/par1-msg-bg2.png","./img/par1-msg-bg3.png"];

    let storage = [];

    /*读取信息*/
    if(window.localStorage.getItem("key")) {
        /*处理字符串*/
        let sstr = window.localStorage.getItem("key");//初始字符串
        let substr = sstr.substring(0,sstr.length-2);//截取字符串
        let res = substr.split(",;,");//最终数组

        for(let i = 0; i < res.length; i++){
            const json = JSON.parse(res[i]);
            gen(json.x,json.y,json.which,json.txt);
        }
    }


    /*点击右键*/
    document.oncontextmenu = function (e) {
        e = e || window.event;
        let x,y;
        x = e.clientX + document.documentElement.scrollLeft || document.body.scrollLeft;
        y = e.clientY + document.documentElement.scrollTop || document.body.scrollTop;
        e.preventDefault();
        oRightM.style.display = "block";
        oRightM.style.left = `${x}px`;
        oRightM.style.top = `${y}px`;
    };
    document.onclick = function (e) {
        oRightM.style.display = "none";
    };
    oRightM.onclick = function (e) {
        e.cancelBubble = true;
    };


    /*点击新增*/
    oNewN.onclick = function (e) {
        e = e || window.event;
        let x,y;
        x = (e.clientX + document.documentElement.scrollLeft || document.body.scrollLeft) - 50;
        y = (e.clientY + document.documentElement.scrollTop || document.body.scrollTop) - 50;

        let which = Math.floor(Math.random()*4);

        gen(x,y,which);

        oRightM.style.display = "none";
    };


    /*点击清空*/
    oDel.onclick = function () {
        if(window.localStorage.getItem("key")) {
            window.localStorage.removeItem("key");
        }
        let onote = document.querySelectorAll(".note"),
            len = onote.length;
        for(let i = 0; i < len; i++){
            document.body.removeChild(onote[i]);
        }
        oRightM.style.display = "none";
    };


    /*点击刷新*/
    oRe.onclick = function () {
        window.location.reload();
    };


    /*生成标签和拖拽事件*/
    function gen(x,y,which,txt) {
        const note = document.createElement("div"),
            content = document.createElement("div");

        note.className = "note";
        content.className = "content";
        content.contentEditable = "true";
        note.appendChild(content);
        note.style.left = `${x}px`;
        note.style.top = `${y}px`;
        note.style.backgroundImage = `url(${imgarr[which]})`;
        if(txt){
            content.innerHTML = txt;
        }
        document.body.appendChild(note);

        /*拖拽*/
        content.onmousedown = function (e) {
            e = e || window.event;

            let stX = e.clientX + document.documentElement.scrollLeft || document.body.scrollLeft;
            let stY = e.clientY + document.documentElement.scrollTop || document.body.scrollTop;

            let noteX = note.offsetLeft;
            let noteY = note.offsetTop;
            document.onmousemove = function (e) {
                e = e || window.event;
                let nx,ny;
                nx = e.pageX - stX;
                ny = e.pageY - stY;

                stX = e.pageX;
                stY = e.pageY;

                noteX += nx;
                noteY += ny;

                note.style.left = `${noteX}px`;
                note.style.top = `${noteY}px`;
            };
            this.onmouseup = function () {
                document.onmousemove = null;
            };
            document.onmouseup = function () {
                this.onmousemove = null;
            };
        }
    }


    //页面刷新执行保存内容
    window.onbeforeunload = function () {
        let onote = document.getElementsByClassName("note");
        for(let i = 0; i < onote.length; i++){
            const x = onote[i].offsetLeft,
                y = onote[i].offsetTop,
                txt = onote[i].children[0].innerHTML;

            let which = getComputedStyle(onote[i]).backgroundImage.slice(-7,-6);

            let json = {
                x:x,
                y:y,
                txt:txt,
                which:which
            };
            storage.push(JSON.stringify(json));
            storage.push(";");
            window.localStorage.setItem("key",storage);
        }
    }
}