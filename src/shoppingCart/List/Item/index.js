import $ from 'jquery'
import StateMachine from 'javascript-state-machine'
import getCart from '../../Cart'
class Item {
	constructor(list, itemData) {
		this.list = list
		this.$el = $('<div>')
		this.itemData = itemData
		this.cart = getCart()
	}
	initInfo() {
		this.$el.append(`<p>名称：${this.itemData.name}</p>`)
		this.$el.append(`<p>价格：${this.itemData.price}</p>`)
	}
	initBtn() {
		let $btn = $('<button>')
		var _this = this
		var fsm = new StateMachine({
			init: '加入购物车',
			transitions: [
				{ name: 'addCart', from: '加入购物车', to: '取消加入购物车' },
				{ name: 'cancelAddCart', from: '取消加入购物车', to: '加入购物车' }
			],
			methods: {
				onAddCart: function () {
					_this.handleAddToCart()
					updateText()
				},
				onCancelAddCart: function () {
					_this.handleRemoveFromCart()
					updateText()
				}
			}
		})
		function updateText() {
			$btn.text(fsm.state)
		}
		$btn.on('click', function () {
			if (fsm.is('加入购物车')) {
				fsm.addCart()
			} else {
				fsm.cancelAddCart()
			}
		})
		updateText()
		this.$el.append($btn)
	}
	handleAddToCart() {
		this.cart.add(this.itemData)
	}
	handleRemoveFromCart() {
		this.cart.del(this.itemData.id)
	}
	render() {
		this.list.$el.append(this.$el)
	}
	init() {
		this.initInfo()
		this.initBtn()
		this.render()
	}
}

export default Item
