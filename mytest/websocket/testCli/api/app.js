const Koa = require('koa');
const cors = require('@koa/cors');
const router = require('./router');
const Chat = require('./chat');
const KoaSession = require('koa-session');//session
const koaBody = require('koa-body');
const app = new Koa;

app.use(cors({
    // origin: 'http://localhost:8081',
    credentials: true
}));
/*配置session*/
app.keys = ["tt is a good boy"];
const CONFIG = {
    key : "tt is a bad boy",//密匙
    maxAge : 7200000,//过期时间 2小时
    // maxAge : 5000,//过期时间 2小时
    autoCommit : true,//自动提交头文件
    overwrite : true,//是否覆盖
    httpOnly : true,//不允许客户端读取
    signed : true,//是否签名
    rolling : true//是否刷新
};

app.use(KoaSession(CONFIG,app));
app.use(koaBody());
app
    .use(router.router.routes())
    .use(router.router.allowedMethods());

let server = app.listen(3001,()=>{
    console.log('监听在http://localhost:3001');
});

process.nextTick(()=>{
    const chat = new Chat();
    chat.chat();
});

/*{
    const ios = require('socket.io')(server,{
        path: '/chat',
    });
    ios.on('connection', socket => {
        socket.on('error',(error) => {
            console.log(error);
        });
        socket.on('chat message', msg => {
            // socket.broadcast.emit('chat message', msg);//除了发件人 其他都能收到
            ios.emit('chat message',msg);
        });
    });
}*/
module.exports = server;

