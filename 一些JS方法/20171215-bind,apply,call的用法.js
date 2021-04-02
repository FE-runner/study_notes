// function fn(a, b, c) {
//   console.log(arguments);
//   // return false
// }

// fn('x', 'y', 'z');
// // { '0': 1, '1': 2, '2': 3 }

// const obj = {};

// try {
//   obj.fn('a', 'b', 'c');
// } catch (e) {
//   console.log(e);
// }
// // obj.fn is not a function

// // bind
// fn.bind(obj)('d', 'e', 'f');
// // { '0': 'd', '1': 'e', '2': 'f' }

// try {
//   fn('d', 'e', 'f').bind(obj);
// } catch (e) {
//   console.log(e);
// }
// // Cannot read property 'bind' of undefined || fn(...).bind is not a function
// // 等价于将fn执行后的返回值进行了bind操作，bind只对function类型的对象有意义

// // apply
// fn.apply(obj,['h','i','j']);

// // call
// fn.call(obj,'o','p','q');

Function.prototype.call = function call(that, ...args) {
  that = that || window;
  const fnSymbol = Symbol('fn');
  that[fnSymbol] = this;
  console.log(that);
  that[fnSymbol](...args);
  delete that[fnSymbol];
};

function test(a) {
  console.log(a, this);
}
const a = { b: 1 };
test.call(a, 333);

const b = Symbol();
const c = {};
c[b] = 1;
console.log(c);
delete c[b];
console.log(c);
