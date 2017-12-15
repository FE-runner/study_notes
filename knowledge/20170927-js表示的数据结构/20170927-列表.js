/*定义List类*/
function List() {
  this.listSize = 0; //初始化元素个数为0
  this.pos = 0; //初始化位置为0
  this.dataStore = []; //初始化空数组来保存列表元素
  this.clear = clear;
  this.find = find; //寻找元素
  this.toString = toString; //显示列表中的元素
  this.insert = insert;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length; //列表中的元素总数
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains; //判断给定值是否在列表中
}

//该方法给列表的最后一个位置添加一个新的元素，待插入成功后，更新列表中的元素个数

List.prototype.append = function (element) {
  this.dataStore[this.listSize++] = element;
}
