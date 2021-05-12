// class User {
// 	constructor(type) {
// 		this.type = type
// 	}
// 	buy() {
// 		if (this.type === 'ordinary') {
// 			console.info('普通用户购买')
// 		} else if (this.type === 'member') {
// 			console.info('会员用户购买')
// 		} else if (this.type === 'vip') {
// 			console.info('vip用户购买')
// 		}
// 	}
// }
// const u1 = new User('ordinary')
// u1.buy()
// const u2 = new User('member')
// u2.buy()
// const u3 = new User('vip')
// u3.buy()

// 添加个类型，就要动到buy函数里的 if else 测试人员就得将所有if 分支重头测试一遍

// 改用策略模式
class Ordinary {
	buy() {
		console.info('普通用户购买')
	}
}

class Member {
	buy() {
		console.info('会员用户购买')
	}
}

class Vip {
	buy() {
		console.info('vip用户购买')
	}
}
const u1 = new Ordinary()
u1.buy()
const u2 = new Member()
u2.buy()
const u3 = new Vip()
u3.buy()
// 增加个类型就重新定义个类，就不会动到原来的逻辑，符合开放封装原则
