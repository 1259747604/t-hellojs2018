const crypto = require("crypto");
const all = crypto.getHashes();
// console.log(all);
let password = "123456";
let jiami = crypto.createHash("md5");
jiami.update(password);
console.log(jiami.digest("hex"));