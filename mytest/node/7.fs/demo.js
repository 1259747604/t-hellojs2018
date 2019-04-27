let fs = require("fs");
fs.readFile("./1.txt","utf8",function (err,data) {
    if(err)return err;
    console.log(data);
});
let data = "测试写入";
fs.writeFile("./2.txt",data,"utf8",function (err) {
    if(err)return err;
});
//监听
fs.watch("./2.txt",function (c,p) {
    console.log(c);
    console.log(p);
});
fs.watchFile("./2.txt",function (c,p) {
    console.log(c);
    console.log(p);
});

fs.mkdir("123",function (err) {
   if(err)return err;
});
fs.readdir("123",function (err,data) {
    if(err)return err;
    console.log(data);
});
let stats =fs.statSync("./123");
console.log(stats.isDirectory());
console.log(stats.isFile());

/*检查路径是否存在*/
console.log("是否存在"+fs.existsSync("./222"));
console.log("是否存在"+fs.existsSync("./123"));