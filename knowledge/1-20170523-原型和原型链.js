(function () {

})();
(function () {
	function Person() {}
	var person = new Person();
	person.name = 'name';
	console.log(person.name) // name
})();

(function () {
	function Person() {}
	// 虽然写在注释里，但是你要注意：
	// prototype是函数才会有的属性
	Person.prototype.name = 'name';
	var person1 = new Person();
	var person2 = new Person();
	console.log(person1.name) // name
	console.log(person2.name) // name
})();

(function () {
	function Person() {}
	var person = new Person();
	console.log(person.__proto__ === Person.prototype); //true
})();

(function () {
	function Person() {}
	console.log(Person === Person.prototype.constructor); //true
	console.log(Person === Person.constructor); //false
})();

(function () {
	function Person() {}

	var person = new Person();

	console.log(person.__proto__ == Person.prototype) // true
	console.log(Person.prototype.constructor == Person) // true
	// 顺便学习一个ES5的方法,可以获得对象的原型
	console.log(Object.getPrototypeOf(person) === Person.prototype) //true
})();

(function () {
	function Person() {}

	Person.prototype.name = 'name';

	var person = new Person();

	person.name = 'name of this person';
	console.log(person.name) // name of this person

	delete person.name;
	console.log(person.name) // name
	console.log(person.__proto__) // name
	console.log(person.prototype) // Person { name: 'name' }
	console.log(Person.prototype) // undefined
	console.log(Person.__proto__) // [Function]
	delete person.__proto__.name;
	console.log(person.name) // undefined
})();

(function () {
	var obj = new Object();
	obj.name = 'name'
	console.log(obj.name) // name
})();

(function () {
	function Person() {}
	var person = new Person();
	console.log(person.constructor === person.__proto__.constructor) // true
	console.log(person.hasOwnProperty()) // true
})();

(function () {
	// 	hasOwnProperty：判断一个对象是否有你给出名称的属性或对象。该属性必须是对象本身的一个成员。
	// isPrototypeOf：判断要检查其原型链的对象是否存在于指定对象实例中，是则返回true，否则返回false。
	function Person() {
		this.name = '哈哈' //私有属性 在生成实例时，函数被执行 这些属性就变成实例的私有属性
		this.age = 18;
		this.work={
			address:'北京'
		}

	}
	Person.prototype.gender = '男'
	var person = new Person();
	person.name = 'hehe'


	console.log(Object.getPrototypeOf(person)) //true
	console.log(person.hasOwnProperty('name')) // true
	console.log(person.hasOwnProperty('age')) // true 引用？
	console.log(person.hasOwnProperty('gender')) // false 继承

	console.log(person.age) // 18
	console.log(person.name) // hehe
	delete person.name;
	console.log(person.name) // undefined

	var person2 = new Person();
	console.log(person2.name) // 哈哈 
	person2.name='呵呵2'
	console.log(person2.name) // 呵呵2 

	var person3 = new Person();
	console.log(person3.name) // 哈哈 

	var person4 = new Person();
	console.log(person4.work) // { address: '北京' }
	person4.work={
		address:'xinyang'
	}
	console.log(person4.work) // { address: 'xinyang' } 

	var person5= new Person();
	console.log(person5.work) // { address: '北京' }

	var person6= new Person();
	person6.__proto__.gender='女'
	console.log(Person.prototype.gender)
	console.log(person5.gender)
	console.log(person4.gender)
	console.log(person3.gender)
	console.log(person2.gender)
	console.log(person.gender)

})();

//null-Object-Function-Person-person