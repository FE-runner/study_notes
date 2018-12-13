const target = 'safasfFdfasdfEfasfsaKabvv';
const target2 = '123456789';

const reg = /[A-Z]/g;
const reg2 = /(\d{3}\B)/g;

// 返回一个替换后的新字符串
const result = target.replace(reg, (item, index, __target) => //replace的参数分别是：匹配项,匹配项的index,target
  `-${item.toLowerCase()}` //返回一个替换项
);

let result2 = target2.replace(reg2, (item, group1, idnex, __target) => {
  console.log('item', item);
  console.log('group1', group1);
  console.log('index', idnex);
  console.log('__target', __target);
  return `${item},`;
});
// Array.prototype.splice.call(result2,  result2.length - 2);

console.log(target);
console.log(result);

console.log(target2);
console.log(result2);
