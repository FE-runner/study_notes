/*
 ES6 规定，Promise对象是一个构造函数，用来生成Promise实例。
 Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由 JavaScript 引擎提供，不用自己部署。
 Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。
 
 Promise 实例具有then方法
 then方法返回的是一个新的Promise实例 因此可以采用链式写法，即then方法后面再调用另一个then方法。
 
 Promise.prototype.catch方法是.then(null, rejection)的别名 用于指定发生错误时的回调函数。
 一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。
 
 finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
 
 Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。Promise.all方法接受一个数组作为参数
 
 
 
 Promise.race方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。Promise.race方法的参数与Promise.all方法一样
 
 有时需要将现有对象转为 Promise 对象，Promise.resolve方法就起到这个作用。
 
 Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected。
 
 不知道或者不想区分，函数f是同步函数还是异步操作，但是想用 Promise 来处理它 Promise.try方法
 
 事实上，Promise.try就是模拟try代码块，就像promise.catch模拟的是catch代码块。
 
 
 
 
 
 
 
 
 * */