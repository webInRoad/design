export function log(type) {
	return function (target, name, descriptor) {
		let oldValue = descriptor.value
		descriptor.value = function () {
			console.info(`正在执行 ${type} 操作`)
			return oldValue.apply(this, arguments)
		}
		return descriptor
	}
}
