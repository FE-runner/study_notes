/*
 1 概述
 一种新的原始数据类型
 表示独一无二的值
 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）
 Symbol 值通过Symbol函数生成
 Symbol函数前不能使用new命令，否则会报错
 Symbol函数可以接受一个字符串作为参数
 Symbol 的参数是一个对象，就会调用该对象的toString方法
 Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的
 Symbol 值不能与其他类型的值进行运算，会报错。
 Symbol 值可以显式转为字符串。Symbol 值也可以转为布尔值，但是不能转为数值。
 
 
 2 作为属性名的 Symbol
 Symbol 值作为对象属性名时，不能用点运算符
 
 Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。
 有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。 返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。
 Reflect.ownKeys方法可以返回所有类型的键名，包括常规键名和 Symbol 键名。
 我们可以利用这个特性，为对象定义一些非私有的、但又希望只用于内部的方法。
 
 Symbol.for方法 它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。如果有，就返回这个 Symbol 值，否则就新建并返回一个以该字符串为名称的 Symbol 值。
 
 Symbol.for()与Symbol()这两种写法，都会生成新的 Symbol。它们的区别是，前者会被登记在全局环境中供搜索，后者不会
 
 Symbol.for为 Symbol 值登记的名字，是全局环境的，可以在不同的 iframe 或 service worker 中取到同一个值。
 
 内置的 Symbol 值
 对象的Symbol.hasInstance属性
 对象的Symbol.isConcatSpreadable属性
 对象的Symbol.species属性
 对象的Symbol.match属性
 对象的Symbol.replace属性
 对象的Symbol.search属性
 对象的Symbol.split属性
 对象的Symbol.iterator属性，指向该对象的默认遍历器方法。
 对象的Symbol.toPrimitive属性
 对象的Symbol.toStringTag属性
 对象的Symbol.unscopables属性
 
 
 
 
*/