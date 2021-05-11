import StateMachine from 'javascript-state-machine'
import $ from 'jquery'
var fsm = new StateMachine({
	init: '收藏',
	transitions: [
		{ name: 'doStore', from: '收藏', to: '取消收藏' },
		{ name: 'deleteStore', from: '取消收藏', to: '收藏' }
	],
	methods: {
		onDoStore: function () {
			console.log('收藏成功')
			updateText()
		},
		onDeleteStore: function () {
			console.log('取消收藏成功')
			updateText()
		}
	}
})
const updateText = function () {
	$('#btn1').text(fsm.state)
}

$('#btn1').on('click', function () {
	if (fsm.is('收藏')) {
		fsm.doStore()
	} else {
		fsm.deleteStore()
	}
})
// 初始化
updateText()
