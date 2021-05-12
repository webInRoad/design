const property = {
	getName() {
		return this.firstName + ' ' + this.lastName
	},
	say() {
		alert('speak')
	}
}

const zhangsan = Object.create(property)
zhangsan.firstName = '张'
zhangsan.lastName = '三'
console.info(zhangsan.getName())
zhangsan.say()

const lisi = Object.create(property)
lisi.firstName = '李'
lisi.lastName = '四'
console.info(lisi.getName())
lisi.say()
