const Koa = require("koa");
const router = require('./router');
const static = require("koa-static");
const path = require("path");
const cors = require("@koa/cors");
const app = new Koa;

app.use(cors());
app.use(static(path.join(__dirname,"static")));

app
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(3000,()=>{
        console.log('服务监听在localhost:3000');
    });