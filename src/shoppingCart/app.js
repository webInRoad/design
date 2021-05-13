import $ from 'jquery'
import PurchasedGoods from './PurchasedGoods'
import List from './List'
class App {
	constructor() {
		this.$el = $('#app')
	}
	initPurchasedGoods() {
		var goods = new PurchasedGoods(this)
		goods.init()
	}
	initList() {
		var list = new List(this)
		list.init()
	}
	init() {
		this.initPurchasedGoods()
		this.initList()
	}
}
export default App
