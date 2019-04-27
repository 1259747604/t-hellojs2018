<template>
    <div class="container">
        {{session}}
        <div class="inpName" v-if="!show">
            <h1>输入一个昵称</h1>
            <input type="text" v-model="name">
            <button @click="submitName">提交</button>
        </div>
        <div class="chat" v-if="show">
            <ul id="messages"></ul>
            <form action="">
                <input id="m" autocomplete="off" /><button>Send</button>
            </form>
        </div>
    </div>
</template>

<script>
    import $ from  'jquery';
    import $axios from 'axios';
    import io from 'socket.io-client';
    $axios.defaults.baseURL = 'http://localhost:3001';
    $axios.defaults.withCredentials = true;
    export default {
        data() {
            return {
                show: false,
                name: '',
                session: ''
            }
        },
        created(){
            // this.getSession();
        },
        mounted(){
            // this.handshake();
            this.getSession();

        },

        methods:{
            getSession(){
                $axios.get('/session')
                    .then(data => {
                        if(data.data.status){
                            this.session = data.data.session.name;
                            this.show = true;

                            this.$nextTick(()=>{
                                this.handshake();
                            })
                        }
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            submitName(){
                const name = this.name.trim();
                if(!name){
                    return alert('没写名字')
                }
                $axios.post('/chatName',{name})
                    .then(data => {
                        this.session = data.data.session.name;
                        this.show = true;

                        this.$nextTick(()=>{
                            this.handshake();
                        })
                    });
            },
            async isStatus(){
                const status =await $axios.get('/session')
                    .then(data => {
                        return data.data.status
                    })
                    .catch(err => {
                        console.log(err);
                    });

                return status;
            },
            handshake(){
                const socket = io('http://localhost:3001',{
                    path:'/chat',
                });
                $('form').submit(async () => {
                    const status = await this.isStatus();
                    if(status){
                        const data = {
                            msg: $('#m').val(),
                            name: this.session
                        };
                        socket.emit('chat message', data);
                        $('#m').val('');
                    }
                    else{
                        console.log('过期')
                        /*过期后续操作暂不完成*/
                    }
                    return false;
                });

                socket.on('chat message', (msg) => {
                    const name = msg.name === this.session ? '我' : msg.name;
                    $('#messages').append($('<li>').text(`${name}:${msg.msg}`));
                });
                socket.on('error', (error) => {
                    alert('错了');
                    console.log(error);
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container{
        margin: auto;
        width: 800px;
        height: 500px;
        border: 1px solid;
    }
</style>
