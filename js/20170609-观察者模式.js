// var observer = {
// 	//    注册订阅
// 	register: function (type, fn) { 
// 		//    如果该消息不存在，则创建消息
// 		if (typeof messages[type] === 'undefined') {
// 			messages[type] = [fn];
// 			//    如果消息存在
// 		} else {
// 			//     将动作方法推入消息对应的动作执行列表
// 			messages[type].push(fn);
// 		}
// 	},
// 	//     发布信息
// 	publish: function (type, args) {
// 		// 如果不存在该条消息
// 		if (!messages[type]) {
// 			return;
// 		}
// 		//     定义消息信息
// 		var events = {
// 				type: type, //    消息类型
// 				args: args || {} //    消息携带的数据
// 			},
// 			len = messages[type].length; //消息动作的长度
// 		// 遍历消息动作
// 		for (var i = 0; i < len; i++) {
// 			//     将每条消息通知给订阅者
// 			messages[type][i].call(this, events);
// 		}
// 	},
// 	// 取消订阅
// 	cancel: function (type, fn) {
// 		//     如果存在该类型的消息
// 		if (messages[type] instanceof Array) {
// 			var i = messages[type].length - 1;
// 			// 遍历通知方法
// 			for (; i >= 0; i--) {
// 				//     如果有通知该订阅者的方法，则移除
// 				//     splice的三种功能(删除、替换、插入)之一
// 				messages[type][i] === fn &&
// 				messages[type].splice(i, 1);
// 			}
// 		}
// 	}
// }


function Observer() {
	this.evs = {};
}

Observer.prototype.on = function (ev, cb) {
	this.evs[ev] ? this.evs[ev].push(cb): this.evs[ev] = [cb];
	console.log(this.evs)

}

Observer.prototype.emit = function (ev, ...args) {
	console.log(this.evs[ev]);
	this.evs[ev] && this.evs[ev].forEach((item) => {
		item.apply(this, args)
	})
	console.log(Array.prototype.forEach(()=>{
		console.log(arguments)
	},(this.evs[ev])))

}

Observer.prototype.remove = function (ev, cb) {
	this.evs[ev] = this.evs[ev] && this.evs[ev].filter((item) => {
		return item !== cb;
	});
}

function csl() {
	console.log('click');
}

function csl2() {
	console.log('click2');
}
var o = new Observer();
o.on('click', csl);
o.on('click', csl2);
o.emit('click');


var arr=[1,2,3,4,5];
var json={};
json.arr=[6,7,8,9,10]
arr.forEach(item=>{
	console.log(item)
})

arr.forEach.call(json.arr,item=>{
	console.log(item)
})