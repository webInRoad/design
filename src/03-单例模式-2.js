class LoginForm {
	constructor() {
		this.state = 'hide'
	}
	show() {
		if (this.state == 'show') {
			alert('已经显示了')
			return
		}
		alert('显示出来')
		this.state = 'show'
	}

	hide() {
		if (this.state == 'hide') {
			alert('已经隐藏了')
			return
		}
		this.state = 'hide'
	}
}
LoginForm.getInstance = (function () {
	let instance
	return function () {
		if (!instance) {
			instance = new LoginForm()
		}
		return instance
	}
})()

let login1 = LoginForm.getInstance()
let login2 = LoginForm.getInstance()
login1.show() // 会弹出"显示出来"
login2.show() // 会弹出"已经显示了"
let login3 = new LoginForm()
login3.show() // 会弹出"显示出来"
console.info(login1 === login2)
//场景
// if(window.jQuery !=null){
//     return window.jQuery;
// }else{
//     //初始化...
// }
