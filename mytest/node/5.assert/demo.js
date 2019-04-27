const assert = require("assert");
//断言
// assert(1+1===2,"如果前面不是预期结果则返回该信息");
// assert(false,"如果前面不是预期结果则返回该信息");//抛出错误

// assert.equal(1+1,2,"如果前面不是预期结果则返回该信息");
// assert.equal(1,"1","如果前面不是预期结果则返回该信息");//此处没有抛出错误说明equal使用的是==
// assert.strictEqual(1,"1","如果前面不是预期结果则返回该信息");//此处抛出错误说明strictEqual使用的是===

// assert.deepEqual({a:1},{a:"1"},"如果前面不是预期结果则返回该信息");//比较对象
// assert.deepStrictEqual({a:1},{a:"1"},"如果前面不是预期结果则返回该信息");//比较对象,严格模式===

/*assert.notEqual();
assert.notStrictEqual();
assert.notDeepEqual();
assert.notDeepStrictEqual();*/
//期望不相等时使用