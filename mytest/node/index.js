process.nextTick(()=>console.log(1));
process.nextTick(()=>console.log(2));
setImmediate(()=>console.log(3));
setImmediate(function () {
    console.log(4);
    process.nextTick(()=>console.log(5));
});
setTimeout(()=>console.log(6),0);
const timer = setInterval(function () {
    console.log(7);
    clearInterval(timer);
},0);
Promise.resolve("8")
    .then((res)=>console.log(res));
console.log(9);
// 9 1 2 8 6 7 3 4 5