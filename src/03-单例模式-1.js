class SingleObjecct {
	login() {
		console.info('....login')
	}
}

let instance = null
SingleObjecct.getInstance = function () {
	if (!instance) {
		instance = new SingleObjecct()
	}
	return instance
}

// SingleObjecct.getInstance = (function () {
// 	let instance = null
// 	return function () {
// 		if (!instance) {
// 			instance = new SingleObjecct()
// 		}
// 		return instance
// 	}
// })()
// 测试,这里只能用getInstance 才能保证单例，如果用 new SingleObject 就没办法保证了
let single1 = SingleObjecct.getInstance()
single1.login()
let single2 = SingleObjecct.getInstance()
single2.login()
let unSingle = new SingleObjecct()
console.info('single1 === single2', single1 === single2) // true
console.info('single1 === unSingle', single1 === unSingle) // false
