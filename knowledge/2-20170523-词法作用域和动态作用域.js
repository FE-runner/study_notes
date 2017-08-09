(function () {

})();

// 作用域:

// 作用域是程序源代码中定义变量的区域。
// 作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
// ECMAScript6之前只有全局作用域和函数作用域。
// JavaScript采用词法作用域(lexical scoping)，也就是静态作用域。

// 静态作用域与动态作用域:

// 因为采用词法作用域，函数的作用域在函数定义的时候就决定了。
// 与词法作用域相对的是动态作用域，函数的作用域在函数调用的时候才决定。

(function () {
	var value = 1;

	function foo() {
		console.log(value);
	}

	function bar() {
		var value = 2;
		foo();
	}
	bar() // 1
})();

(function () {
	var value = 1;

	function foo() {
		console.log(value);
	}

	var bar = () => {
		var value = 2;
		foo();
	}

	bar() // 1
})();

(function () {
	var value = 1;

	var foo = () => {
		console.log(value)
	}

	function bar() {
		var value = 2;
		foo();
	}

	bar() // 1
})();

(function () {
	var value = 1;

	var foo = () => {
		console.log(value)
	}

	var bar = () => {
		var value = 2;
		foo();
	}

	bar() // 1
})();

//js采用词法作用域

(function () {

	var a = 0;

	function checkscope() {
		var a = 1;

		function f() {
			return a;
		}
		return f();
	}
	console.log(checkscope()) // 1
})();

(function () {
	var a = 0;

	function checkscope() {
		var a = 1;

		function f() {
			return a;
		}
		return f;
	}
	console.log(checkscope()()) // 1
})();
// JavaScript函数的执行用到了作用域链，这个作用域链是在函数定义的时候创建的。嵌套的函数f()定义在这个作用域链里，其中的变量scope一定是局部变量，不管何时何地执行函数f()，这种绑定在执行f()时依然有效。