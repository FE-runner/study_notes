/**
 * 简介
 *
 * 静态方法
 *
 * 实例属性的新写法
 *
 * 静态属性
 *
 * 私有方法和私有属性
 *
 * new.target属性
 *
 *
 */

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.toSring = () => {
//   return this.x + ',' + this.y;
// };

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toSring() {
    return this.x + '.' + this, y;
  }
}
const ponit = new Point(1, 2);
