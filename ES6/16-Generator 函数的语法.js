/*
 Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。
 执行 Generator 函数会返回一个遍历器对象
 有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。
 
 由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。
 yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。
 遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
 
 yield表达式本身没有返回值，或者说总是返回undefined。next方法可以带一个参数，该参数就会被当作上一个yield表达式的返回值。
 Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。
 
 for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
 一旦next方法的返回对象的done属性为true，for...of循环就会中止，且不包含该返回对象
 
 Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。
 注意，不要混淆遍历器对象的throw方法和全局的throw命令
 throw方法抛出的错误要被内部捕获，前提是必须至少执行过一次next方法。
 
 Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历 Generator 函数。
 如果return方法调用时，不提供参数，则返回值的value属性为undefined。
 
 next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。
 
 next()是将yield表达式替换成一个值。
 
 throw()是将yield表达式替换成一个throw语句。
 
 return()是将yield表达式替换成一个return语句。
 
 如果在 Generator 函数内部，调用另一个 Generator 函数，默认情况下是没有效果的。这个就需要用到yield*表达式，用来在一个 Generator 函数里面执行另一个 Generator 函数。
 
 Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
 
 如果把g当作普通的构造函数，并不会生效，因为g返回的总是遍历器对象，而不是this对象。
 Generator 函数总是返回一个遍历器，ES6 规定这个遍历器是 Generator 函数的实例，也继承了 Generator 函数的prototype对象上的方法。
 
 它执行产生的上下文环境，一旦遇到yield命令，就会暂时退出堆栈，但是并不消失，里面的所有变量和对象会冻结在当前状态。等到对它执行next命令时，这个上下文环境又会重新加入调用栈，冻结的变量和对象恢复执行。
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 * */