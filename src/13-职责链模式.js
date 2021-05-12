// 请假流程 组长审批 经理审批 总监审批
class Action {
	constructor(name) {
		this.name = name
		this.nextAction = null
	}
	setNextAction(action) {
		this.nextAction = action
	}
	handle() {
		console.info(`${this.name} 审批了`)
		if (this.nextAction) {
			this.nextAction.handle()
		}
	}
}

const a1 = new Action('组长')
const a2 = new Action('经理')
const a3 = new Action('总监')
a1.setNextAction(a2)
a2.setNextAction(a3)
a1.handle()

// 场景： jQuery的链式操作, promise.then 的链式操作
