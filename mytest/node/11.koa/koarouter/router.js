const Router = require("koa-router");

const router= new Router;

router.get('/',(ctx,next)=>{
    ctx.body = "<h1>index</h1>";
});
router.get('/home',(ctx,next)=>{
    ctx.body = "<h1>home</h1>";
});
router.get('/page',(ctx,next)=>{
    ctx.body = "<h1>page</h1>";
});

module.exports = router;