// Promise 的执行时机
// promise 在新建之后就会立即执行
(function () {
	var a = function () {
		return new Promise((resovle, reject) => {
			var num = Math.round(Math.random())
			if (num) {
				resovle(num)
			} else {
				reject(num)
			}
		})
	}
	a().then((num) => {
		console.log(num)
	}).catch((num) => {
		console.log(num)

	})
	let b = new Promise((resovle, reject) => {
		console.log('Promise ')
		resovle()
	})

	b.then(() => {
		console.log('resovle')
	})
	console.log('Hi')
	// Promise
	// Hi
	// 1
	// resovle

	// Promise
	// Hi
	// resovle
	// 0
})();

(function () {
	function loadImageAsync(url) {
		return new Promise(function (resolve, reject) {
			var image = new Image();

			image.onload = function () {
				resolve(image);
			};

			image.onerror = function () {
				reject(new Error('Could not load image at ' + url));
			};

			image.src = url;
		});
	}
	loadImageAsync('./1s')
})();

(function () {
	var getJSON = function (url) {
		var promise = new Promise(function (resolve, reject) { // new Promise
			var client = new XMLHttpRequest(); // new XHR
			client.open("GET", url); // xhr.open()
			client.onreadystatechange = handler; //xhr.onreadtstatechange  
			client.responseType = "json"; //xhr.responseTtpe
			client.setRequestHeader("Accept", "application/json"); // xhr.setRequersHeader
			client.send(); //xhr.send 

			function handler() { // onreadystatechange
				if (this.readyState !== 4) { // readyState
					return;
				}
				if (this.status === 200) { //status
					resolve(this.response); //reponse
				} else {
					reject(new Error(this.statusText)); //statueText
				}
			};
		});

		return promise;
	};

	getJSON("/posts.json").then(function (json) {
		console.log('Contents: ' + json);
	}, function (error) {
		console.error('出错了', error);
	});
})();