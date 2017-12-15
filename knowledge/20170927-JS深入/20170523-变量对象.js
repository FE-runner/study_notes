// 对于每个执行上下文，都有三个重要属性：

// 变量对象(Variable object，VO)
// 作用域链(Scope chain)
// this

// 变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。
(function () {
	console.log(this); // node是global 客户端下是window
	console.log(this === global); // true
	console.log(this instanceof Object); // true
	console.log(setImmediate) // [Function]
	console.log(this.setImmediate) // [Function]
	console.log(global.setImmediate) // [Function]
	var a = 1
	console.log(a)
	console.log(this.a) // undefined 客户端下是1
	console.log(global.a) // undefined 客户端下是1 这一点和客户端不一样需注意
	global.b = 2
	console.log(this.b)
})();

// 执行上下文的代码会分成两个阶段进行处理：分析和执行
// 在进入执行上下文时，（如果是函数上下文，则最先函数的所有形参）首先会处理函数声明，其次会处理变量声明
// 形参声明：没有实参，属性值设为 undefined
// 函数声明：如果变量对象已经存在相同名称的属性，则完全替换这个属性()
// 变量声明：如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性
(function () {
	function foo(a) {
		var b = 2;

		function c() {}
		var d = function () {};

		b = 3;

	}
	foo(1);
	// 活动对象(activation object, AO)
	const AO = {
		arguments: {
			0: 1,
			length: 1
		},
		a: 1,
		b: 3,
		c: `reference to function c(){}`,
		d: `reference to FunctionExpression "d"`
	}
})();

(function () {
	function foo() {
		try {
			console.log(a);
		} catch (err) {
			console.log(err)
		}
		a = 1;
	}
	foo()
})();
(function () {
	function foo() {
		console.log(a);
		var a = 1;
	}
	foo()
})();
(function () {
	function foo() {
		var a = 1;
		console.log(a);
	}
	foo()
})();
(function () {
	function foo() {
		a = 1;
		console.log(a);
	}
	foo()
})();

(function () {
	function foo(a) {
		console.log(a)
		a = 2
		console.log(a)
		console.log(c)

		function c() {
			console.log(a)
		}
		var c = 3

		console.log(b)

		function b() {
			console.log(a)
		}
		var b = 4

	}
	foo()
})();