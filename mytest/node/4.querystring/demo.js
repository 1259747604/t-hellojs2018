const {URL} =require("url");
const querystring = require("querystring");

const str = "https://www.baidu.com/s?word=lol&tn=50000021_hao_pg&ie=utf-8&sc=UWd1pgw-pA7EnHc1FMfqnHRYnWfkrHDdPWcznBuW5y99U1Dznzu9m1Y1rHf1P103P163&ssl_sample=s_11%2Cs_88&srcqid=2580991311004640314";
const myurl = new URL(str);
// console.log(myurl);
let a = querystring.parse(str);
console.log(a);