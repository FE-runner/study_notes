function Parent() {
  this.a = 1;
  this.b = [1, 2, this.a];
  this.c = { demo: 5 };
  this.show = function() {
    console.log(this.a, this.b, this.c.demo);
  };
}

function Child() {
  this.a = 2;
  this.change = function() {
    this.b.push(this.a); // 11 [1,2,11,11]
    this.a = this.b.length; // 5
    this.c.demo = this.a++; //5
  };
}

Child.prototype = new Parent();
// 等价于
// Child.prototype.a = 1;
// Child.prototype.b = [1, 2, 1];
// Child.prototype.c = { demo: 5 };
// Child.prototype.show = function() {
//   console.log(Child.prototype.a, Child.prototype.b, Child.prototype.c.demo);
// };
const parent = new Parent();
const child1 = new Child();
const child2 = new Child();
child1.a = 11;
child2.a = 12;
parent.show();
child1.show();
child2.show();
child1.change();
child2.change();
parent.show();
child1.show();
child2.show();

