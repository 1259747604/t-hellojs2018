function create() {
  let obj = {};
  let Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  let result = Con.apply(obj, arguments);
  console.log(result);
  console.log(result instanceof Object);
  console.log(obj);
  return result instanceof Object ? result : obj;
}

function a(params) {
  console.log(this);
}
create(a);
