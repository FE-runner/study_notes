// 对于每个执行上下文，都有三个重要属性

// 变量对象(Variable object，VO)
// 作用域链(Scope chain)
// this

// ECMAScript 的类型分为语言类型和规范类型。

// ECMAScript 语言类型是开发者直接使用 ECMAScript 可以操作的。其实就是我们常说的Undefined, Null, Boolean, String, Number, 和 Object。

// 而规范类型相当于 meta-values，是用来用算法描述 ECMAScript 语言结构和 ECMAScript 语言类型的。规范类型包括：Reference, List, Completion, Property Descriptor, Property Identifier, Lexical Environment, 和 Environment Record。

// Reference 类型。它与 this 的指向有着密切的关联。
// Reference 类型就是用来解释诸如 delete、typeof 以及赋值等操作行为的。
// 属于一个Specification Type，也就是 “只存在于规范里的抽象类型”。它们是为了更好地描述语言的底层行为逻辑才存在的，但并不存在于实际的 js 代码中。

// Reference 的构成：
// base value  属性所在的对象或者就是 EnvironmentRecord
// referenced name  属性的名称
// strict reference

// MemberExpression :

// PrimaryExpression // 原始表达式 可以参见《JavaScript权威指南第四章》
// FunctionExpression // 函数定义表达式
// MemberExpression [ Expression ] // 属性访问表达式
// MemberExpression . IdentifierName // 属性访问表达式
// new MemberExpression Arguments // 对象创建表达式
// (function () {
// 	var value = 1;

// 	var foo = {
// 		value: 2,
// 		bar: function () {
// 			console.log(this)
// 			return this.value;
// 		}
// 	}

// 	//示例1
// 	console.log(foo.bar()); // 2 this:{ value: 2, bar: [Function: bar] }
// 	//示例2
// 	console.log((foo.bar)()); // 2 this:{ value: 2, bar: [Function: bar] }
// 	//示例3
// 	console.log((foo.bar = foo.bar)()); // undefined this:global
// 	//示例4
// 	console.log((false || foo.bar)()); // undefined this:global
// 	//示例5
// 	console.log((foo.bar, foo.bar)()); // undefined this:global
// 	// 客户端下 示例345的返回值为1
// 	// 客户端非严格模式下，this 的值为 undefined 的时候，其值会被隐式转换为全局对象。？
// })();

// (function () {

// 	function foo() {
// 		console.log(this);
// 	}
// 	foo() //global
// })();

(function () {
  var foo = {
    bar: function () {
      console.log(this);
    },
  }
  foo.bar() // { bar: [Function: bar] }
})();

(function () {
  var foo = {
    bar1: this //
  }
  foo.bar1 // global
})();
(function () {
  var foo = {
    bar: function () {
      console.log(this);
    },
    bar1: this //
  }
  foo.bar() // global
  foo.bar1 // global
})();
(function () {
  function Foo() {
    getName = function () {
      console.log(1);
    };
    return this;
  }

  Foo.prototype.getName = function () {
    console.log(3);
  };

  function getName() {
    console.log(5);
  };
  new Foo().getName() //3
})();
(function () {
  function Foo() {
    getName = function () {
      console.log(1);
    };
    return this
  }

  function getName() {
    console.log(5);
  }

  function Baz() {
    return this;
  }
  console.log(Baz()) // global 
  // console.log(this.Baz()) // 报错/window 
  // console.log(global.Baz()) // 报错/window

  getName() // 5 
  console.log(getName()) // 5 undefined 
  console.log(Foo()) //global
  getName() // 1
  console.log(getName()) // 1 undefined 
})();