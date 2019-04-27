const read = require("stream").Readable;
const rs = new read;
rs.setEncoding("utf8");
rs.push("1");
rs.push("2");
rs.push(null);
rs.on("data",(data)=>{
    console.log(data);
});

const write = require("fs").createWriteStream("3.txt");
rs.pipe(write);