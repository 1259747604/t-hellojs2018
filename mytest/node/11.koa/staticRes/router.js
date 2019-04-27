const Router = require("koa-router");
const fs = require("fs");
const koaBody =require("koa-body");
const router = new Router;

router.get('/',async (ctx,next)=>{
/*    console.log(1);
    await fs.readFile("./view/index.html","utf8",(err,data)=>{
        if(err) console.log(err);
        ctx.body = data;
        console.log(2);
        // console.log(data);
    });
    console.log(3);*/
    let data = await new Promise(resolve => {
        fs.readFile("./view/index.html","utf8",(err,data)=>{
            if(err) console.log(err);
            resolve(data);
        });
    });
    ctx.body = data;
    // ctx.body = fs.readFileSync("./view/index.html","utf8");
});
router.get('/home',(ctx,next)=>{
    ctx.body = fs.readFileSync("./view/home.html","utf8");
});
router.get('/page',(ctx,next)=>{
    ctx.body = fs.readFileSync("./view/page.html","utf8");
});
router.post('/user',koaBody(),(ctx,next)=>{
    console.log(ctx.request.body);
    ctx.body = JSON.stringify(ctx.request.body);
});

module.exports = router;