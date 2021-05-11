// 状态(红灯、绿灯、黄灯)
class State {
	constructor(color) {
		this.color = color
	}
	handle(context) {
		// console.info(context, 'context')
		console.info(`${this.color} 亮起来了`)
		context.setState(this)
	}
}
// 主体
class Context {
	constructor() {
		this.state = null
	}
	// 获取状态
	getState() {
		return this.state
	}
	setState(state) {
		this.state = state
	}
}
const context = new Context()

const red = new State('红')
const green = new State('绿')
const yellow = new State('黄')

// 状态切换(状态)与状态获取(主体)是分开的
red.handle(context)
console.info(context.getState())
green.handle(context)
console.info(context.getState())
yellow.handle(context)
console.info(context.getState())
