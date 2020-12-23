// 实现一个事件委托

function delegate(element, eventType, selector, fn) {
  element.addEventListener(
    eventType,
    (e) => {
      let el = e.target;
      while (!el.matches(selector)) {
        if (element === el) {
          el = null;
          break;
        }
        el = el.parentNode;
      }
      el && fn.call(el, e, el);
    },
    true,
  );
  return element;
}
//可以拖拽的DIV
function drag(element) {
  let dragging = false;
  let position = null;

  element.addEventListener('mousedown', (e) => {
    dragging = true;
    position = [e.clientX, e.clientY];
  });
  document.addEventListener('mousemove', (e) => {
    if (dragging === false) return null;
    const x = e.clientX;
    const y = e.clientY;
    const deltaX = x - position[0];
    const deltaY = y - position[1];
    const left = parseInt(element.style.left || 0);
    const top = parseInt(element.style.top || 0);
    element.style.left = left + deltaX + 'px';
    element.style.top = top + deltaY + 'px';
    position = [x, y];
  });
  document.addEventListener('mouseup', (e) => {
    dragging = false;
  });
}
// 防抖和节流函数
function throttle(fn, delay) {
  let flag = true;
  let timer = null;
  return function (...args) {
    let context = this;
    if (flag) return;
    flag = false;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
      flag = true;
    }, delay);
  };
}

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    let context = this;
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    }
  };
}
// 数组去重
function unique_1(arr) {
  return [...new Set(arr)];
}
function unique_2(arr) {
  let res = arr.filter((item, idnex, self) => {
    return self.indexOf(item) === index;
  });
}
function unique_3(arr) {
  return arr.reduce((total, item) => {
    return total.includes(item) ? total : [...total, item];
  }, []);
}
function unique_4(arr) {
  let obj = {};
  return arr.filter((item, index, self) => {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
  });
}
// 柯里化函数
function currying(fn, ...args) {
  return fn.length > args.length ? (...arguments) => currying(fn, ...args, ...arguments) : fn(...args);
}
// 数组flat
function flatDeep(arr) {
  return arr.reduce((total, item) => {
    if (Array.isArray(item)) {
      return [...total, ...flatDeep(item)];
    } else {
      return [...total, item];
    }
  });
}
// 深拷贝
function deepClone(obj, map = new WeakMap()) {
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Date) return new Date(obj);
  if (obj === null || typeof obj != 'object') return obj;
  if (map(has(obj))) {
    return map.get(obj);
  }
  let t = new obj.constructor();
  map.set(obj, t);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      t[key] = deepClone(obj[key], map);
    }
  }
}
// function dC(obj, map = new WeakMap()) {
//   if (obj instanceof RegExp) return new RegExp(obj);
//   if (obj instanceof Date) return new Date(obj);
//   if (obj === null || typeof obj !== 'object') return obj;
//   if (map(has(obj))) {
//     return map.get(obj);
//   }
//   let t = new obj.constructor(); //=== {}
//   map.set(obj, t);
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       t[key] = deepClone(obj[(key, map)]);
//     }
//   }
// }
// 一个对象类型的函数
function isType(type) {
  return function (obj) {
    console.log(Object.prototype.toString.call(obj));
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
  };
}

// call和apply
Function.prototype.mycall = function () {
  let [thisArg, ...args] = [...arguments];
  thisArg = Object(thisArg) || window;
  let fn = Symbol();
  thisArg[fn] = this;
  let result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
};
Function.prototype.myapply = function () {
  let [thisArg, args] = [...arguments];
  thisArg = Object(thisArg);
  let fn = Symbol();
  thisArg[fn] = this;
  let result = thisArg[fn](...args);
  delete thisArg[fn];
  return result;
};
//测试用例
let cc = {
  a: 1,
};

// 手写bind
Function.prototype.mybind = function (context, ...args) {
  return (...newArgs) => {
    return this.call(context, ...args, ...newArgs);
  };
};
// 实现new操作
function _new() {
  let obj = {};
  let [constructor, ...args] = [...arguments];
  obj.__proto__ = constructor.prototype;
  let result = constructor.apply(obj, args);
  if ((result && typeof result === 'function') || typeof result === 'object') {
    return result;
  }
  return obj;
}
// 实现instanceof
function my_instanceof(leftValue, rightValue) {
  if (typeof leftValue !== 'object' || leftValue === null) return false;
  let rightProto = rightValue.prototype;
  let leftProto = leftValue.__proto__;
  while (true) {
    if (leftProto === null) {
      return false;
    }
    if (leftProto === rightProto) {
      return true;
    }
    leftProto = leftProto.__proto__;
  }
}
// 实现sleep
function sleep(fn, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fn);
    }, time);
  });
}
// 实现数组reduce
Array.prototype.myreduce = function (fn, initVal) {
  let result = initVal;
  let i = 0;
  if (initVal === undefined) {
    result = this[i];
    i++;
  }
  while (i < this.length) {
    result = fn(result, this[i], i);
  }
  return result;
};
// 实现Promise.all和race
Promise.myall = function (arr) {
  return new Promise((resolve, reject) => {
    if (arr.length === 0) {
      return resolve([]);
    } else {
      let res = [];
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] instanceof Promise)) {
          res[i] = arr[i];
          count++;
          if (count === arr.length) {
            resolve(res);
          }
        } else {
          arr[i]
            .then((data) => {
              res[i] = data;
              count++;
              if (count === arr.length) {
                resolve(res);
              }
            })
            .catch((err) => {
              reject(err);
            });
        }
      }
    }
  });
};
Promise.myrace = function (arr) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] instanceof Promise)) {
        Promise.resolve(arr[i]).then(resolve).catch(reject);
      } else {
        arr[i].then(resolve).catch(reject);
      }
    }
  });
};
// 手写继承
function inheritPrototype(subType, superType) {
  let prototype = Object.create(subType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
// 手写ajax
function ajax(method = 'GET', url = '', done) {
  let request = new XMLHttpRequest();
  request.open(method, url, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      done && done(request.responseText);
    }
  };
  request.send();
}
// 正则实现trim()
String.prototype.mytrim = function () {
  return this.replace(/^\s+|\s+$/g, '');
};
// 实现Object.create方法
function create(proto) {
  function Fn() {}
  Fn.prototype = proto;
  Fn.prototype.constructor = proto.constructor;
  return new Fn();
}
// 实现一个同时允许任务数量最大为N的函数
function limitRunTask(tasks = [], n = 0) {
  return new Promise((resolve, reject) => {
    let index = 0;
    let finish = 0;
    let start = 0;
    let res = [];
    run();
    function run() {
      if (finish === tasks.length) {
        resolve(res);
        return;
      }
      while (start < n && index < tasks.length) {
        start++;
        let cur = index;
        tasks[cur]().then((data) => {
          index++;
          start--;
          finish++;
          res[cur] = data;
          run();
        });
      }
    }
  });
}
// 10进制转换
function conver(number, base = 2) {
  let rem;
  let res = '';
  let digits = '0123456789ABCDEF';
  let stack = [];
  while (number) {
    rem = number % base;
    stack.push(rem);
    number = Math.floor(number / base);
  }
  while (stack.length) {
    res += digits[stack.pop()].toString();
  }
  return res;
}
//
