/*
 Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
 Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写
 ES6 原生提供 Proxy 构造函数，用来生成 Proxy 实例。var proxy = new Proxy(target, handler);
 Proxy 对象的所有用法，都是上面这种形式，不同的只是handler参数的写法
 要使得Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象进行操作
 一个技巧是将 Proxy 对象，设置到object.proxy属性，从而可以在object对象上调用。
 
 下面是 Proxy 支持的拦截操作一览，一共 13 种。
 
 get(target, propKey, receiver)：拦截对象属性的读取，比如proxy.foo和proxy['foo']。依次为目标对象、属性名和 proxy 实例本身（严格地说，是操作行为所针对的对象），其中最后一个参数可选。
 set(target, propKey, value, receiver)：拦截对象属性的设置，比如proxy.foo = v或proxy['foo'] = v，返回一个布尔值。
 has(target, propKey)：拦截propKey in proxy的操作，返回一个布尔值。
 deleteProperty(target, propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值。
 ownKeys(target)：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、Object.keys(proxy)、for...in循环，返回一个数组。该方法返回目标对象所有自身的属性的属性名，而Object.keys()的返回结果仅包括目标对象自身的可遍历属性。
 getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象。
 defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc）、Object.defineProperties(proxy, propDescs)，返回一个布尔值。
 preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值。
 getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象。
 isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值。
 setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值。如果目标对象是函数，那么还有两种额外操作可以拦截。
 apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)。
 construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作，比如new proxy(...args)。
 



















 
 
 */