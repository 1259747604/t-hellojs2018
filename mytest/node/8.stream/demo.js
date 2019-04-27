const fs = require("fs");
let read = fs.createReadStream("1.txt");
let write = fs.createWriteStream("2.txt");
// read.resume();//流的释放

/*
read.setEncoding("utf8");
read.on("data",(data)=>{
    console.log(data);
});//流的释放
read.on("end",()=>{
    console.log("读取结束")
});*/

read.pipe(write);