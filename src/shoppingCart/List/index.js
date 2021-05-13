import $ from 'jquery'
import CreateItem from './Item/createItem'
import { GET_LIST } from '../config'

class List {
	constructor(app) {
		this.app = app
		this.$el = $('<div>')
	}
	loadData() {
		return fetch(GET_LIST).then((itemData) => {
			return itemData.json()
		})
	}
	initItemData(itemData) {
		console.info(itemData, 'itemData')
		itemData.forEach((item) => {
			var item = CreateItem(this, item)
			item.init()
		})
	}

	render() {
		this.loadData()
			.then((itemData) => {
				this.initItemData(itemData)
			})
			.then(() => {
				this.app.$el.append(this.$el)
			})
	}
	init() {
		this.render()
	}
}

export default List
