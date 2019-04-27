function cssT(obj,attr,...num) {
    let arr = ["translate","translateX","translateY","translateZ","translate3d",
                "rotate","rotateX","rotateY","rotateZ","rotate3d",
                "scale","scaleX","scaleY","scaleZ","scale3d",
                "skew","skewX","skewY","perspective"];
    let allVal = [...num];//可有可无
    if( !obj.transform ){
        obj.transform = [];
    }
    //没有值
    if(num.length!==0){
        obj.transform[attr] = allVal;
        let val = "";
        let str;
        switch (attr){
            case arr[0]:
                val = allVal[0]+"px,"+(allVal[1]||0)+"px";
                break;
            case arr[1]:case arr[2]:case arr[3]:case arr[18]:
                val = allVal[0]+"px";
                break;
            case arr[4]:
                val = allVal[0]+"px,"+(allVal[1]||0)+"px,"+(allVal[2]||0)+"px";
                break;
            case arr[5]:case arr[6]:case arr[7]:case arr[8]:case arr[16]:case arr[17]:
                val = allVal[0]+"deg";
                break;
            case arr[9]:
                val = allVal[0]+","+(allVal[1]||0)+","+(allVal[2]||0)+","+(allVal[3]||0)+"deg";
                break;
            case arr[10]:
                val = allVal[0]+","+(allVal[1]||1);
                break;
            case arr[11]:case arr[12]:case arr[13]:
                val = allVal[0];
                break;
            case arr[14]:
                val = allVal[0]+","+(allVal[1]||1)+","+(allVal[2]||1);
                break;
            case arr[15]:
                val = allVal[0]+"deg,"+(allVal[1]||0)+"deg";
                break;
        }
        str= ""+attr+"("+val+")";
        obj.style.transform = str;
    }
    //有值
    else{
        let val = obj.transform[attr];
        if(!val){
            val = [];
        }
        return val;
    }
}