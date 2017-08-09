var target = [
	[1, 2, 3, 4],
	[5, 6, 7, 8,100],
	[9, 10, 11, 12],
	// [13, 14, 15, 16],
	// [17, 18, 19, 20],
	// [21, 22, 23, 24],

];

var result = [];
var len = target.length;
var len2 = 0;
target.forEach(item=>{
	if(item.length>len2){
		len2=item.length
	}
})
//以原item的length作为new father的length
for (var i = 0; i < len2; i++) {
	result.push([])
	//以原father的length作为new item的length
	for (var j = 0; j < len; j++) {
		// if (target[j][i]) 不想要undefined可以判断
		result[i].push(target[j][i])

	}
}
console.log(result)