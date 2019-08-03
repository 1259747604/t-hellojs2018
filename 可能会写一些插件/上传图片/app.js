const KOA = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const koaBody = require('koa-body');
const {join} = require('path');
const app = new KOA;
const router = new Router();

app.use(cors());

router.post('/img',koaBody({
    multipart: true,
    formidable: {
        // 上传存放的路径
        uploadDir: join(__dirname, "img"),
        // 保持后缀不变
        keepExtensions: true,
        // 文件大小
        maxFileSize: 10240000000,
        onFileBegin: (name, file) => {
            // 取后缀  如：.js  .txt
            const reg = /\.[A-Za-z]+$/g;
            const ext = file.name.match(reg)[0];

            // 修改上传文件名
            file.path = join(__dirname, "img/") + Date.now() + ext;
        },
        onError(err){
            console.log(err)
        }
    }
}),(ctx)=>{
    ctx.body = '发送'
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(3000,()=>{
    console.log('启动');
});