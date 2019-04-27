const http = require("http");

let options = {
    host:"localhost",
    port:3001,
    method:"get",
    path:"/"
};
const fn = (res)=>{
    let data = {};
    const req = http.request(options,response=>{
        response.on("data",(chunk)=>{
            data = chunk;
        });
        response.on("end",()=>{
            res.end(data);
        })
    });
    req.on("error",(e)=>{
        console.log(e);
    });
    req.write("");
    req.end();
};

http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    fn(res);
}).listen(3000,()=>{
    console.log(`服务启动在loaclhost:3000`);
});