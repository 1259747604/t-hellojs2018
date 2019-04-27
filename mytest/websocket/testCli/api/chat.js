module.exports = class {
    constructor(){
        const server = require('./app');

        this.io = require('socket.io')(server,{
            path: '/chat',
        });
    }
    chat(){
        this.io.on('connection', socket => {
            socket.on('chat message', msg => {
                this.io.emit('chat message',msg);
            });
        });
    }
};