function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j+1]) {        //相邻元素两两对比
                var temp = arr[j+1];        //元素交换
                arr[j+1] = arr[j];
                arr[j] = temp;
				
            }
			console.log(arr)
        }
    }
    return arr;
}




;(function(){
	var arr = [17, 27, 75, 89, 3, 9, 51, 41, 42, 76, 33, 15, 16, 65, 86, 90, 76, 26, 54, 19];
	bubbleSort(arr);
	console.log(arr)
})();