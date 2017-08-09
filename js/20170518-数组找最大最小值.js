var arr =[ 96, 96,15, 53, 95, 20, 40, 61, 82, 16, 84, 90, 80, 45, 79, 75, 27, 66, 76, 36, 59 ];

(function(){
var min=Infinity;
var minIndex=-1;
var max=-Infinity;
var maxIndex=-1;
for (var i = 0; i < arr.length; i++) {
	if(min>arr[i]){
		min=arr[i]
		minIndex=i
	}
	if(max<arr[i]){
		max=arr[i]
		maxIndex=i
	}
}
console.log(min)
console.log(minIndex)// 只能找到第一个符合要求的索引，如果需要全部找到可以用下面方法
console.log(max)
console.log(maxIndex)

function findInArr(item,arr){
	var json={
		hasItem:false,
		indexArr:[],
	}
	for (var i = 0; i < arr.length; i++) {
		if(item===arr[i]){
			json.hasItem=true;
			json.indexArr.push(i);
		}		
	}
	console.log(json)
	return json;
}

findInArr(min,arr);
findInArr(max,arr);



})();




