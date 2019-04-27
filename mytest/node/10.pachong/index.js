const request = require("superagent");
const koa = require("koa");
const cheerio = require("cheerio");
const fs = require("fs");
const app = new koa;

app.use(async (ctx,next)=>{
    // ctx.res.setHeader("Access-Control-Allow-Origin","*");
    ctx.response.set("Access-Control-Allow-Origin","*");
    let arr = [];
    console.log(ctx.request.query.search);
    let url = `https://${ctx.request.query.search}/`;
    let data = await new Promise(resolve => {
        request
            .get(url)
            .end((err, res) => {
                if(err) console.log(err);

                const $ = cheerio.load(res.text);
                $('img').each((i,value)=>{
                    arr.push(value.attribs.src)
                });
                resolve(arr);
            });
    });
    ctx.body = arr;
});
app.listen(3000,()=>{
    console.log("服务监听在localhost:3000");
});
