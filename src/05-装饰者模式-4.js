function mixin(...list) {
	return function (target) {
		Object.assign(target.prototype, ...list)
	}
}

const Foo = {
	foo() {
		alert('foo')
	}
}
// function Foo(){
//     alert('foo')
// }

@mixin(Foo)
class Demo {
	constructor() {
		this.speak = function () {
			alert('speak')
		}
	}
	say() {
		console.info('say hello')
	}
}
let d = new Demo()
d.foo()
d.speak()
