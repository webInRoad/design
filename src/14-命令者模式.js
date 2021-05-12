// 接收者
class Receiver {
	exec() {
		console.info('执行了')
	}
}

// 命令者
class Command {
	constructor(receiver) {
		this.receiver = receiver
	}
	cmd() {
		console.info('执行命令')
		this.receiver.exec()
	}
}

// 触发者
class Invoker {
	constructor(command) {
		this.command = command
	}
	invoker() {
		console.info('开始')
		this.command.cmd()
	}
}
// 士兵
const solder = new Receiver()
// 小号手
const trumpeter = new Command(solder)
// 将军
const general = new Invoker(trumpeter)
general.invoker()
