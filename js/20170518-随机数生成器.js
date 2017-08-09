function rand(n=0,m=1){
	var temp=Math.round(Math.random()*Math.abs(m-n)+Math.min(n,m))
	console.log(temp)
	return temp
}

function randArr(length,n,m){
	let arr=[]
	for (var i = 0; i < length; i++) {
		arr.push(rand(n,m))
	}
	console.log(arr)
	return arr;
}

randArr(20,1,100)