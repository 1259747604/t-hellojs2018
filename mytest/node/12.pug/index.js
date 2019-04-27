const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");
const {join} = require("path");

const app = new Koa;

app.use(views(join(__dirname,"views"),{extension:"pug"}));

app
    .use(async ctx=>{
        await ctx.render('./test',{
            flag1:false
        });
    })
    .listen(3000,()=>{
        console.log('服务监听在localhost:3000');
    });