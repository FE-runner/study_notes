/*
 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 
 
 
 Iterator 的作用有三个：
 一是为各种数据结构，提供一个统一的、简便的访问接口；
 二是使得数据结构的成员能够按某种次序排列；
 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
 
 遍历过程
 （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
 （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员
 （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
 （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
 
 
 默认的 Iterator 接口部署在数据结构的Symbol.iterator属性，或者说，一个数据结构只要具有Symbol.iterator属性，就可以认为是“可遍历的”（iterable）。Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数。执行这个函数，就会返回一个遍历器。
 
 
 对于普通的对象，for...of结构不能直接使用，会报错
 
 for...in循环可以遍历数组的键名。
 for...in循环有几个缺点。
 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
 for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
 某些情况下，for...in循环会以任意顺序遍历键名。
 总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。
 for...of循环相比上面几种做法，有一些显著的优点。
 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
 不同于forEach方法，它可以与break、continue和return配合使用。
 提供了遍历所有数据结构的统一操作接口。
 
 
 
 
 */


function makeIterator(array) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++]} :
        {done: true};
    }
  };
}
