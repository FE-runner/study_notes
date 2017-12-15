function fn(x) {
  if(x<=1) return 1;
  let b = arguments.callee(x-1)
  return x * b
  // console.log('实参对象arguments', arguments);
  // console.log('实参对象实参对象arguments.callee', arguments.callee);
  // console.log('实参对象实参对象arguments.caller', arguments.caller);
}
const a = fn(7)
console.log(a)