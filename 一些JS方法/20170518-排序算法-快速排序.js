function qSort(list) { //快速排序的伪代码
  if (list.length === 0) {
    return [];
  }
  const left = [];
  const right = [];
  const flag = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < flag) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return qSort(left).concat(flag, qSort(right));
}
const arr = [17, 27, 75, 89, 3, 9, 51, 41, 42, 76, 33, 15, 16, 65, 86, 90, 76, 26, 54, 19];
(function() {
  const result = qSort(arr);
  console.log(result);
})();
