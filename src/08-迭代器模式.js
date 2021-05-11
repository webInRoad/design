// 主体
class Container {
	constructor(list) {
		this.list = list
	}
	// 生成遍历器
	getIterator() {
		return new Iterator(this)
	}
}

// 迭代器
class Iterator {
	constructor(container) {
		this.list = container.list
		this.index = 0
	}
	next() {
		if (this.hasNext()) {
			return this.list[this.index++]
		}
		return null
	}
	hasNext() {
		if (this.index < this.list.length) {
			return true
		}
		return false
	}
}

const arr = [1, 2, 3, 4, 5, 6] // 是有序的集合,比如数组,nodeList
const container = new Container(arr)
const iterator = container.getIterator()
while (iterator.hasNext()) {
	console.info(iterator.next())
}
