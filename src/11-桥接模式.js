class Color {
	constructor(name) {
		this.name = name
	}
}

class Shape {
	constructor(name, color) {
		this.name = name
		this.color = color
	}
	draw() {
		console.info(`${this.color.name} ${this.name}`)
	}
}

let red = new Color('红色')
let blue = new Color('蓝色')
let redCircle = new Shape('圆形', red)
redCircle.draw()
let blueCircle = new Shape('圆形', blue)
blueCircle.draw()
let redRectangle = new Shape('长方形', red)
redCircle.draw()
let blueRectangle = new Shape('长方形', blue)
blueCircle.draw()
