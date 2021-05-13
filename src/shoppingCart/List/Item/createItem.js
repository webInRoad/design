import Item from './index'
const createDiscount = function (itemData) {
	return new Proxy(itemData, {
		get: function (target, key) {
			if (key == 'name') {
				return target.name + ' [折扣] '
			} else if (key == 'price') {
				return target.price * 0.8
			} else {
				return target.key
			}
		}
	})
}

const createItem = function (list, itemData) {
	if (itemData.discount) {
		itemData = createDiscount(itemData)
	}
	return new Item(list, itemData)
}
export default createItem
