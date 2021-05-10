class subject {
	constructor() {
		this.state = 0
		this.observerList = []
	}
	getState() {
		return this.state
	}

	setState(state) {
		this.state = state
		this.nodifyAllObserver()
	}
	attach(observer) {
		this.observerList.push(observer)
	}
	nodifyAllObserver() {
		this.observerList.forEach((observer) => {
			observer.update()
		})
	}
}

class Observer {
	constructor(name, subject) {
		this.name = name
		this.subject = subject
		this.subject.attach(this)
	}
	update() {
		console.info(`${this.name} update, state: ${this.subject.getState()}`)
	}
}
let s = new subject()
let ob1 = new Observer('name1', s)
let ob2 = new Observer('name2', s)
let ob3 = new Observer('name3', s)
s.setState(1)
s.setState(2)
s.setState(3)

// 观察者要定义个方法作为订阅, 主题那边当触发发布之后,遍历所有观察者,分别调用订阅方法
