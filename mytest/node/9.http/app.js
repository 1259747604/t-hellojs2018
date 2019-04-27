const http = require("http");

http.createServer((req,res)=>{
    let obj = {
        a:1,
        b:2,
    };
    res.setHeader("Access-Control-Allow-Origin","*");
    res.write(JSON.stringify(obj));
    res.end();
}).listen(3000,()=>{
    console.log(`服务启动`);
});