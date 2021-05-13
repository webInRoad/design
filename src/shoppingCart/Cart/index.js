class Cart {
	constructor() {
		this.list = []
	}
	add(itemData) {
		this.list.push(itemData)
	}
	del(id) {
		this.list = this.list.filter((item) => item.id != id)
	}
	getList() {
		return this.list.map((item) => item.name).join('\n')
	}
}

const getCart = (function () {
	var cart = null
	return function () {
		if (!cart) {
			cart = new Cart()
		}
		return cart
	}
})()

export default getCart
