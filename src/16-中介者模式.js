class Mediation {
	constructor(a, b) {
		this.a = a
		this.b = b
	}
	setA() {
		let number = this.b.number
		this.a.setNumber(number * 100)
	}
	setB() {
		let number = this.a.number
		this.b.setNumber(number - 40)
	}
}

class A {
	constructor() {
		this.number = 0
	}
	// 更改 a.number 时,通过中介者,将 b.number 一并改了
	setNumber(num, m) {
		this.number = num
		if (m) {
			m.setB()
		}
	}
}

class B {
	constructor() {
		this.number = 0
	}
	// 更改 b.number 时,通过中介者,将 a.number 一并改了
	setNumber(num, m) {
		this.number = num
		if (m) {
			m.setA()
		}
	}
}
const a = new A()
const b = new B()
const m = new Mediation(a, b)
a.setNumber(100, m)
console.info(b.number)
b.setNumber(100, m)
console.info(a.number)
