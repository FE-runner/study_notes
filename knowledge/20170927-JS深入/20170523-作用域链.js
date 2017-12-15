(function () {

})();

// 对于每个执行上下文，都有三个重要属性：

// 变量对象(Variable object，VO)
// 作用域链(Scope chain)
// this

(function () {
	var scope = "global scope";

	function checkscope() {
		var scope2 = 'local scope';
		return scope2;
	}
	checkscope();
	// 函数执行上下文中作用域链和变量对象的创建过程

	// 函数被创建，保存作用域链到 内部属性[[scope]]
	// 	checkscope.[[scope]] = [
	//     globalContext.VO
	// ];

	// 执行函数，创建函数执行上下文，函数执行上下文被压入执行上下文栈
	// ECStack = [
	//     checkscopeContext,
	//     globalContext
	// ];

	// 函数并不立刻执行，开始做准备工作
	// 第一步：复制函数[[scope]]属性创建作用域链
	// checkscopeContext = {
	//     Scope: checkscope.[[scope]],
	// }

	// 第二步：用 arguments 创建活动对象，随后初始化活动对象，加入形参、函数声明、变量声明
	// checkscopeContext = {
	// AO: {
	//     arguments: {
	//         length: 0
	//     },
	//     scope2: undefined
	// }
	// }

	// 第三步：将活动对象压入 checkscope 作用域链顶端
	// 	checkscopeContext = {
	//     AO: {
	//         arguments: {
	//             length: 0
	//         },
	//         scope2: undefined
	//     },
	//     Scope: [AO, [[Scope]]]
	// }

	// 准备工作做完，开始执行函数，随着函数的执行，修改 AO 的属性值
	// 	checkscopeContext = {
	//     AO: {
	//         arguments: {
	//             length: 0
	//         },
	//         scope2: 'local scope'
	//     },
	//     Scope: [AO, [[Scope]]]
	// }

	// 查找到 scope2 的值，返回后函数执行完毕，函数上下文从执行上下文栈中弹出
	// ECStack = [
	//     globalContext
	// ];
})();