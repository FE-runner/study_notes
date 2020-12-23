let count = 0;
for (let i = 0; i < 9876543210; i++) {
 if(isEqu(i)&&isQue(i)){
   count++;
   console.log(i,count)
 }
}
console.log(count);

function isEqu(n) {
  const json = {};
  const strNumArr = Array.from(String(n));

  for (let i = 0; i < strNumArr.length; i++) {
    if (json[strNumArr[i]]) {
      return false;
    }
    json[strNumArr[i]] = -1;
  }
  return n < 9876543210;
}

function isQue(n) {
  const target = '1024';
  let arr =[];
  const strNumArr = Array.from(String(n));

  strNumArr.forEach(item =>{

    if(  target.includes(item)){
      arr.push(item)
    }
  })

  let tempNumber =Number(arr.join(''))

  return tempNumber===1024
}
