(function () {

})();

(function () {
	var foo = function () {
		console.log('foo1');
	}

	foo(); // foo1

	var foo = function () {
		console.log('foo2');
	}

	foo(); // foo2

	console.log(a)
	var a = 1;

	console.log(b)
	var b = {
		bbb: 111
	}

	try {
		console.log(c)
	} catch (err) {
		console.log(err)
	}


})();
// 预解析的变量提升

(function () {
	function foo() {
		console.log('foo1');
	}
	foo(); // foo2

	function foo() {
		console.log('foo2');
	}

	foo(); // foo2
})();
// 预解析的函数提升

// JavaScript 的可执行代码就三种，全局代码、函数代码、eval代码。

// 执行上下文栈（Execution context stack，ECS）

// 当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。

(function () {
	var ECS = [];
	var globalContext = 'globalContext'
	var fooContext = 'fooContext'
	var barContext = 'barContext'
	var bazContext = 'bazContext'

	function foo() {
		console.log('do sth');
	}

	function bar() {
		foo()
	}

	function baz() {
		bar()
	}
	baz()
	//模拟如下：
	// global()
	ECS.push(globalContext)
	//fn()
	ECS.push(bazContext)
	ECS.push(barContext)
	ECS.push(fooContext)
	//fn() done
	ECS.pop()
	ECS.pop()
	ECS.pop()
	// keep global()
	// close file
	ECS.pop()

})();