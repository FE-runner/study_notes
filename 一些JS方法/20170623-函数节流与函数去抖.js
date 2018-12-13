// 函数去抖（debounce）
/**
 * 空闲控制 返回函数连续调用时，空闲时间必须大于或等于 idle，action 才会执行
 * @param idle   {number}    空闲时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
var debounce = function (idle, action) {
	var last
	return function () {
		var ctx = this,
			args = arguments
		clearTimeout(last)
		last = setTimeout(function () {
			action.apply(ctx, args)
		}, idle)
	}
}

// 函数节流（throttle）
/**
 * 频率控制 返回函数连续调用时，action 执行频率限定为 次 / delay
 * @param delay  {number}    延迟时间，单位毫秒
 * @param action {function}  请求关联函数，实际应用需要调用的函数
 * @return {function}    返回客户调用函数
 */
var throttle = function (delay, action) {
	var last = 0
	return function () {
		var curr = Date.now()
		if (curr - last > delay) {
			console.log(last)
			console.log(curr)
			action.apply(this, arguments)
			last = curr
		}
	}
}
var cb = function () {
	console.log('执行了')
}
// throttle(1000,cb)
// setInterval(throttle(2000, cb), 500)

function test() {
	return function () {
		console.log(111)
	}
}
// test()
// test()()

function test2(cb) {
	return function () {
		cb.apply(this, arguments)
	}
}
// test2(cb)
// test2(cb)()
// setTimeout(test2(cb), 1000);

//
(function () {
	var cb = function () {
		console.log('执行了')
	}

	function debounce(time, cb) {
		clearTimeout(debounce.timer);
		debounce.timer = setTimeout(cb, time);
	}
	// delay(1000, cb)
})();

(function () {
	var cb = function (x) {
		console.log(x);
	}

	function throttle(time, cb1) {
		throttle.cur=Date.now();
		!throttle.old&&(throttle.old=1);

		if (throttle.cur - throttle.old > time) {
			cb1();
			console.log(arguments)
			throttle.old = throttle.cur
		}
	}
	setInterval(()=>{throttle(2000,function(){
		cb('haha')
	})},10)

})();
