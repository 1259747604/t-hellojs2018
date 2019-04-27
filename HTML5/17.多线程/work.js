self.onmessage = function (e) {
    let str ="";
    num = e.data;
    for(let i = 0; i < num; i++){
        str += "<span>"+i+"</span>"
    }
    self.postMessage(str);
};