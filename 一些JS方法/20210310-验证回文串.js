let test1 = 'A man, a plan, a canal: Panama';
let test2 = 'race a car';
// 双指针对撞
(() => {
  function isPalindrome(str) {
    const reg = /[^a-zA-Z0-9]/g; //非字母数字的正则表达
    const s = str.replace(reg, '').toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i = i + 1;
      j = j - 1;
    }
    return true;
  }
  let a = isPalindrome(test1);
  let b = isPalindrome(test2);
  console.log(a, b);
})();
// for循环版本的双指针对撞
(() => {
  function isPalindrome(str) {
    const reg = /[^a-zA-Z0-9]/g; //非字母数字的正则表达
    const s = str.replace(reg, '').toLowerCase();
    for (let i = 0, len = s.length; i < len; i++) {
      let j = len - 1 - i;
      if (s[i] !== s[j]) {
        return false;
      }
    }
    return true;
  }
  let a = isPalindrome(test1);
  let b = isPalindrome(test2);
  console.log(a, b);
})();
// f平分两半比较是否相等
(() => {
  function isPalindrome(str) {
    const reg = /[^a-zA-Z0-9]/g; //非字母数字的正则表达
    const s = str.replace(reg, '').toLowerCase();
    const len = s.length;
    let halfS1 = '';
    let halfS2 = '';
    if (len % 2) {
      halfS1 = s.substring(0, (len - 1) / 2);
      halfS2 = s
        .substring((len + 1) / 2, len)
        .split('')
        .reverse()
        .join('');
    } else {
      halfS1 = s.substring(0, len / 2);
      halfS2 = s.substring(len / 2, len);
    }
    return halfS1 === halfS2;
  }
  let a = isPalindrome(test1);
  let b = isPalindrome(test2);
  console.log(a, b);
})();
// 自己最顺手的
(() => {
  function isPalindrome(str) {
    const reg = /[^a-zA-Z0-9]/g; //非字母数字的正则表达
    const s = str.replace(reg, '').toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while (i <= j) {
      if (s[i] !== s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }
  let a = isPalindrome(test1);
  let b = isPalindrome(test2);
  console.log(a, b);
})();
