const Koa = require('koa');
const fs = require('fs');

const app = new Koa;
const server = require('http').createServer(app.callback());
const io = require('socket.io')(server);

app.use(async (ctx) => {
    ctx.body = fs.readFileSync('./test.html','utf8')
});
io.on('connection', socket => {
    /*socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });*/
    socket.join('room 237', () => {
        let rooms = Object.keys(socket.rooms);
        console.log(rooms); // [ <socket.id>, 'room 237' ]
    });
});
server.listen(3000,()=>{
    console.log('监听在3000');
});