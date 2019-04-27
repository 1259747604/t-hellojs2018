const http = require("http");

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    res.write("测试文本");
    res.end();
}).listen(3000,()=>{
    console.log(`服务启动监听在locahost:3000`);
});