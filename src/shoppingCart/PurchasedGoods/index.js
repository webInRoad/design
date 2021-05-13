import $ from 'jquery'
import getCart from '../Cart'
class PurchasedGoods {
	constructor(app) {
		this.app = app
		this.$el = $('<div>').css({
			'padding-bottom': '20px'
		})
		this.cart = getCart()
	}
	render() {
		this.app.$el.append(this.$el)
	}
	initBtn() {
		let $btn = $('<button>购物车</button>')
		$btn.on('click', () => {
			alert(this.cart.getList())
		})
		this.$el.append($btn)
	}
	init() {
		this.initBtn()
		this.render()
	}
}

export default PurchasedGoods
