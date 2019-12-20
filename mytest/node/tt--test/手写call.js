Function.prototype.mycall = function(context) {
  if (typeof context !== 'function') {
    throw new TypeError('类型错误');
  }
  context.fn = this;
  const args = arguments.slice(1);
  const result = context.fn(args);
  delete context.fn;
  return result;
};

Function.prototype.mybind = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('类型错误');
  }
  const _this = this;
  const args = [...arguments].slice(1);
  return function F() {
    if (this instanceof F) {
      return new _this(...args, ...arguments);
    }
    return _this.apply(context, args.concat(...arguments));
  };
};
function a(...params) {
  console.log(this, params);
}

let b = {};
a.call(b, 1, 2);

var c = {
  a: function() {
    var func = function() {
      console.log(this.b);
    };
    func.mybind(this)();
  },
  b: 'hello'
};
c.a();
console.log(c.b);
