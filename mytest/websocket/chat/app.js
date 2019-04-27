const Koa = require('koa');
const fs = require('fs');

const app = new Koa;
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

app.use(async (ctx) => {
    ctx.body = fs.readFileSync('./test.html','utf8')
});
io.on('connection', socket => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
});
server.listen(3001,()=>{
    console.log('监听在3001');
});