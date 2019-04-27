const mongoose = require("mongoose");
const db = mongoose.createConnection("mongodb://localhost:27017/test",{useNewUrlParser: true});

db.on("err",()=>{
    console.log('连接失败');
});
db.on("open",()=>{
    console.log('连接成功');
});
const Schema = mongoose.Schema;

const animalSchema = new Schema(
    {
        name: String,
        type: String
    },
    {versionKey:false}
);

animalSchema.methods.findSimilarTypes = function(cb) {
    return this.model('Animal').find({ type: this.type }, cb);
};

const Animal = db.model("animal",animalSchema);
// var Animal = mongoose.model('Animal', animalSchema);
let data1 = {
    name:"猫",
    type:"猫科"
};
let data2 = {
    name:"狗",
    type:"dog"
};


/*let d1 = new Animal(data1);
d1.save().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});

let d2 = new Animal(data2);
d2.save().then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
});*/
