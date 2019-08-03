/* 
group:每组个数
mode:模式 left right bottom even
*/
function run($, option) {
    // 获取元素
    let $sildeArr = $(`${option.el} .Automatic .auto_slide`);

    let group = option.group?option.group:3;
    let interval = option.interval?option.interval:500;
    let time = option.time?option.time:3000;
    let mode = option.mode?option.mode:"left";
    let bottomGroup = option.bottomGroup?option.bottomGroup:1;
    let fillGroupWithBlank = option.fillGroupWithBlank?option.fillGroupWithBlank:false;

    // 设置高度
    $sildeArr.css({
        height: `${100 / group}%`
    });

    // left right even bottom模式
    if(mode === "left" || mode === "right" || mode === "even"){
        // 分组
        let allArr = [];
        for (let i = 0; i < $sildeArr.length; i += group) {
            allArr.push($sildeArr.slice(i, i + group));
        }

        if(mode === "left"){
            //定义初始位置
            for (let i = 0; i < allArr.length; i++) {
                for (let y = 0; y < allArr[i].length; y++) {
                    $(allArr[i][y]).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: `translate3d(${i*100}%,${y * 100}%,0)`,
                        transition: "none"
                    });
                }
            }

            let x = 0;
            setInterval(() => {
                x++;
                x = x%allArr.length;
                for (let i = 0; i < allArr.length; i++) {
                    for (let y = 0; y < allArr[i].length; y++) {
                        setTimeout(()=>{
                            $(allArr[i][y]).css({
                                transform: `translate3d(${(i-x)*100}%,${y * 100}%,0)`,
                                transition: `${interval}ms linear`
                            });
                        },y*interval)
                    }
                }
            }, time);
        }
        else if(mode === "right"){
            //定义初始位置
            for (let i = 0; i < allArr.length; i++) {
                for (let y = 0; y < allArr[i].length; y++) {
                    $(allArr[i][y]).css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transform: `translate3d(-${i*100}%,${y * 100}%,0)`,
                        transition: "none"
                    });
                }
            }

            let x = 0;
            setInterval(() => {
                x++;
                x = x%allArr.length;
                for (let i = 0; i < allArr.length; i++) {
                    for (let y = 0; y < allArr[i].length; y++) {
                        setTimeout(()=>{
                            $(allArr[i][y]).css({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                transform: `translate3d(${(x-i)*100}%,${y * 100}%,0)`,
                                transition: `${interval}ms linear`
                            });
                        },y*interval)
                    }
                }
            }, time);
        }
        else if(mode === "even"){
            //定义初始位置
            for (let i = 0; i < allArr.length; i++) {
                for (let y = 0; y < allArr[i].length; y++) {
                    if(y %2){
                        $(allArr[i][y]).css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: `translate3d(${i*100}%,${y * 100}%,0)`,
                            transition: "none"
                        });
                    }
                    else{
                        $(allArr[i][y]).css({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            transform: `translate3d(-${i*100}%,${y * 100}%,0)`,
                            transition: "none"
                        });
                    }
                }
            }

            let x = 0;
            setInterval(() => {
                x++;
                x = x%allArr.length;
                for (let i = 0; i < allArr.length; i++) {
                    for (let y = 0; y < allArr[i].length; y++) {
                        if(y%2){
                            setTimeout(()=>{
                                $(allArr[i][y]).css({
                                    transform: `translate3d(${(i -x)*100}%,${y * 100}%,0)`,
                                    transition: `${interval}ms linear`
                                });
                            },y*interval)
                        }
                        else{
                            setTimeout(()=>{
                                $(allArr[i][y]).css({
                                    transform: `translate3d(${(x-i)*100}%,${y * 100}%,0)`,
                                    transition: `${interval}ms linear`
                                });
                            },y*interval)
                        }
                    }
                }
            }, time);
        }
    }
    else if(mode === "bottom"){
        if(fillGroupWithBlank){
            if($sildeArr.length % bottomGroup !== 0){
                let needNum = Math.ceil($sildeArr.length / bottomGroup)*bottomGroup;
                for(let i = 0; i < needNum - $sildeArr.length; i++){
                    $(`${option.el} .Automatic`).append("<div class='auto_slide fill'></div>")
                }
                $sildeArr = $(`${option.el} .Automatic .auto_slide`);
                $sildeArr.css({
                    height: `${100 / group}%`
                });
            }
        }
        let allArr = [...$sildeArr];
        for (let i = 0; i < allArr.length; i++) {
            $(allArr[i]).css({
                position: "absolute",
                top: 0,
                left: 0,
                transform: `translate3d(0,${i * 100}%,0)`,
                transition: "none"
            });
        }

        setInterval(()=>{
            if(bottomGroup > 1){
                for(let i  = 0; i < bottomGroup; i++){
                    setTimeout(()=>{
                        $(allArr[i]).css({
                            transform: `translate3d(-100%,${i*100}%,0)`,
                            transition: `${interval}ms linear`
                        });
                    },i*interval)
                }
                setTimeout(()=>{
                    for(let i  = 0; i < bottomGroup; i++){
                        allArr.push(allArr[0]);
                        allArr.splice(0,1);
                    }
                    for (let i = 0; i < allArr.length; i++) {
                        if( i >  allArr.length-1 -  bottomGroup){
                            $(allArr[i]).css({
                                transform: `translate3d(0,${i * 100}%,0)`,
                                transition: "none"
                            });
                        }
                        else{
                            $(allArr[i]).css({
                                transform: `translate3d(0,${i * 100}%,0)`,
                                transition: `${interval}ms linear`
                            });
                        }
                    }
                },interval*bottomGroup)
            }
            else{
                $(allArr[0]).css({
                    transform: `translate3d(-100%,0,0)`,
                    transition: `${interval}ms linear`
                });
                setTimeout(()=>{
                    allArr.push(allArr[0]);
                    allArr.splice(0,1);
                    for (let i = 0; i < allArr.length; i++) {
                        if( i ===  allArr.length-1){
                            $(allArr[i]).css({
                                transform: `translate3d(0,${i * 100}%,0)`,
                                transition: "none"
                            });
                        }
                        else{
                            $(allArr[i]).css({
                                transform: `translate3d(0,${i * 100}%,0)`,
                                transition: `${interval}ms linear`
                            });
                        }
                    }
                },interval)
            }
        },time);
    }
}

export {run};
