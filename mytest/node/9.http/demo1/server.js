const http = require("http");
const fs = require("fs");
http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

    switch (req.url){
        case "/1":
            res.write(fs.readFileSync("./1.html","utf8"));
            break;
        case "/2":
            res.write(fs.readFileSync("./2.html","utf8"));
            break;
    }
    // console.log(req.url);
    res.end();
}).listen(3000,()=>{
    console.log(`服务启动在localhost:3000`);
});