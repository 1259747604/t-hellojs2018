const Router = require('koa-router');
const router = new Router;
const nameArr = [];

router.post('/chatName',async (ctx) => {
    const data = ctx.request.body;
    /*控制名字不重复 暂时不完成*/
    nameArr.push(data.name);
    ctx.session = {
        name: data.name
    };
    ctx.body = {
        session:ctx.session
    }
});

router.get('/session',async (ctx) => {
    if(ctx.session.isNew){
        return ctx.body = {
            status : 0,
        }
    }
    // console.log(ctx.cookies.get('tt is a bad boy'));
    ctx.body = {
        status : 1,
        session:ctx.session
    }
});

exports.router = router;