const eventEmitter = require("events").EventEmitter;
const myevent = new eventEmitter;
function fn(){
    console.log(1);
}
myevent.on("test",fn);
setTimeout(function () {
    myevent.emit("test");
},2000);