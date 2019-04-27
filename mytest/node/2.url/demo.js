const {URL,resolve} = require("url");
const myurl = new URL("https://www.baidu.com/s?word=lol&tn=50000023_hao_pg&ie=utf-8&sc=UWd1pgw-pA7EnHc1FMfqnHRYnWfkrHDdPWfLniuW5y99U1Dznzu9m1YYnHRsP1TYPjmY&ssl_sample=s_11%2Cs_88&srcqid=2580991310736364300&f=3&rsp=3");
console.log(myurl.searchParams.get("word"));
console.log(resolve('/one/two/three', 'four'));         // '/one/two/four'
console.log(resolve('http://example.com/', '/one'));    // 'http://example.com/one'
console.log(resolve('http://example.com/one', '/two')); // 'http://example.com/two'