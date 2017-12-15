// 1 作为函数
function fn() {
  console.log('作为函数调用时，this指向该作用域块的全局对象或者undefined', this);
}
fn();


// 作为方法

const Obj = {
  a: function () {
    console.log('作为方法时，this指向该方法的对象', this);
  },
  b: {
    c: function () {
      console.log('作为方法时，this指向该方法的直接上级对象', this);
    }
  }
};
Obj.a();
Obj.b.c();

// 作为构造函数

function Foo() {
  this.name = 1;
  // return 1
  // return {a:2}
}
const foo = new Foo;
console.log(foo)
// 在new后 this指向该新对象
// 如果显示指定返回值为对象，则会指向该返回对象

// 采用call, apply的静态方法进行调用

function Bar() {
  console.log(this)
}

const test = {a: '我是测试对象，call改变了this指向，本来是指向全局对象或者undefined的'};

Bar.call(test)
