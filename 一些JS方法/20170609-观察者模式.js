// let messages = {};
// const observer = {
//   register(type, fn) {
//     if (typeof messages[type] === 'undefined') {
//       messages[type] = [fn];
//     } else {
//       messages[type].push(fn);
//     }
//   },
//   publish(type, playload = {}) {
//     if (!messages[type]) return;
//     messages[type].forEach((item) => {
//       item.bind(this)(playload);
//     });
//
//   },
//   cancel(type, fn) {
//     if (messages[type] instanceof Array) {
//       const targetIndex = messages[type].findIndex((item) => {
//         return fn === item;
//       });
//       if (targetIndex > -1) {
//         messages[type].splice(targetIndex, 1);
//       }
//     }
//
//   },
// };
//
// function x() {
//   console.log('x===', arguments);
// }
//
// function y() {
//   console.log('y===', arguments);
// }
//
// observer.register('a', x);
// observer.register('a', y);
// console.log(observer, messages);
// observer.publish('a', 'haha');
// observer.cancel('a', x);
// console.log(observer, messages);

// 构建观察者对象，初始化事件队列
function Observer(events = {}) {
  this.events = events;
}

// 注册事件到事件队列中
Observer.prototype.on = function (type,fn) {
  this.events[type] ? this.events[type].push(fn) : this.events[type] = [fn];
  console.log(this.events);
  
};
// 派发事件队列中相应type的事件按顺序执行，传入相关参数
Observer.prototype.emit = function (type, ...playload) {
  (this.events[type] instanceof Array) &&
  (this.events[type].forEach((item) => {
    item.apply(this, playload);
  }));
  
};
// 移除事件队列中相应type的事件
Observer.prototype.remove = function (type, fn) {
  (this.events[type] instanceof Array) &&
  (this.events[type] = this.events[type].filter((item) => {
    return item !== fn;
  }));
};

function x() {
  console.log('x===', arguments);
}

function y() {
  console.log('y===', arguments);
}

function z() {
  console.log('z===', arguments);
}

// const ob = new Observer();
//
// ob.on('a', x);
// ob.on('a', y);
// ob.on('a', z);
// ob.emit('a', 'hhhh');
// ob.remove('a', x);
// ob.on('a');
//
//
 module.exports=Observer