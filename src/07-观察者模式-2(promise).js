const loadImg = function (src) {
	const promise = new Promise((resolve, reject) => {
		var img = document.createElement('img')
		img.src = src
		img.onload = function () {
			resolve(img)
		}
		img.onerror = function (error) {
			reject(error)
		}
	})
	return promise
}

var src = '//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
loadImg(src)
	.then(function (img) {
		console.info(img.width)
		return img
	})
	.then(function (img) {
		console.info(img.height)
	})

// promise的原理应该是类似:
// 先将then里面的函数储存起来，在resovle与reject里取出函数，并执行函数。其实就是收集依赖->触发通知->取出依赖执行的方式
