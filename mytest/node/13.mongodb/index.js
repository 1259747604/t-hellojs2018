const mongoose = require("mongoose");
const db = mongoose.createConnection("mongodb://localhost:27017/ttdata",{ useNewUrlParser: true });
mongoose.Promise = global.Promise;

db.on("err",()=>{
    console.log('连接失败');
});
db.on("open",()=>{
    console.log('连接成功');
});

const Schema = mongoose.Schema;
const ttSchema = new Schema({
    name:String,
    age:Number,
    sex:{
        type:String,
        default:'男'
    }
},{versionKey:false});

const TT = db.model("tt",ttSchema);

let data = {
    name:"啊啊",
    age:18,
};

const d1 = new TT(data);
d1.save().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});