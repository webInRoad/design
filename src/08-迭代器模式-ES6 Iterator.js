// ES6 为什么要引入 Iterator
// 因为在ES6 语法中,有序集合的数据类型有很多
// Array,Set,Map,String,TypedArray,arguments,NodeList

// 以上数据类型都有[Symbol.Iterator]属性
// 属性值是个函数,执行函数返回一个迭代器
// 这个迭代器就有 next 方法顺序迭代元素
// 比如 Array.prototype[Symbol.iterator]().next()

// function each(data) {
// 	const iterator = data[Symbol.iterator]() // 生成迭代器
// 	// console.info(iterator.next())
// 	// console.info(iterator.next())
// 	// console.info(iterator.next())
// 	// console.info(iterator.next())
// 	// console.info(iterator.next())
// 	let item = { done: false }
// 	while (!item.done) {
// 		item = iterator.next()
// 		if (!item.done) {
// 			console.info(item)
// 			console.info(item.value)
// 		}
// 	}
// }

// for of 相当于是 Symbol.iterator 的语法糖
function each(data) {
	// 带有遍历器特性的对象: data[Symbol.iterator] 有值
	for (let item of data) {
		console.info(item)
	}
}
let arr = [1, 2, 3]
let nodeList = document.getElementsByTagName('P')
let map = new Map()
map.set('name', 'zhangSan')
map.set('age', 12)
each(arr)
each(nodeList)
each(map)
