const path = require("path");
let a = path.join("a","b","c");
console.log(a);
let b = path.parse(a);
console.log(b);