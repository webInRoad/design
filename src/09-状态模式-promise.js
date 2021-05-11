import StateMachine from 'javascript-state-machine'
var fsm = new StateMachine({
	init: 'pending',
	transitions: [
		{ name: 'resolve', from: 'pending', to: 'fulfilled' },
		{ name: 'reject', from: 'pending', to: 'rejected' }
	],
	methods: {
		onResolve: function (state, data) {
			data.successCallBacks.forEach((fn) => fn())
		},
		onReject: function () {
			data.failCallBacks.forEach((fn) => fn())
		}
	}
})
class MyPromise {
	constructor(fn) {
		this.successCallBacks = []
		this.failCallBacks = []
		fn(
			() => {
				fsm.resolve(this)
			},
			() => {
				fsm.reject(this)
			}
		)
	}
	then(successCall, failCall) {
		this.successCallBacks.push(successCall)
		this.failCallBacks.push(failCall)
	}
}

const loadImg = function (src) {
	const promise = new MyPromise((resolve, reject) => {
		const img = document.createElement('img')
		img.onload = function () {
			resolve(img)
		}
		img.onerror = function (err) {
			reject(err)
		}
		img.src = src
	})
	return promise
}
var src = ' //www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
let result = loadImg(src)
result.then(function (img) {
	console.info('ok1')
})
result.then(function (img) {
	console.info('ok2')
})
