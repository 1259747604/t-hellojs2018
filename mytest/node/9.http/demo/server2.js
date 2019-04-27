const http = require("http");

http.createServer((req,res)=>{
    const obj = {
        a:1,
        b:2,
        c:3
    };
    res.write(JSON.stringify(obj));
    res.end();
}).listen(3001,()=>{
    console.log(`服务启动在loaclhost:3001`);
});