// 备忘类
class Memorandum {
	constructor(content) {
		this.content = content
	}
	getContent() {
		return this.content
	}
}
// 备忘列表
class CareTaker {
	constructor() {
		this.list = []
	}
	add(memorandum) {
		this.list.push(memorandum)
	}
	get(index) {
		return this.list[index]
	}
}
// 编辑器
class Editor {
	constructor() {
		this.content = null
	}
	setContent(content) {
		this.content = content
	}
	getContent() {
		return this.content
	}
	saveContentToMemorandum() {
		return new Memorandum(this.content)
	}
	getContentFromMemorandum(memorandum) {
		this.content = memorandum.getContent()
	}
}

let editor = new Editor()
let careTaker = new CareTaker()
editor.setContent('111')
editor.setContent('222')
careTaker.add(editor.saveContentToMemorandum())
editor.setContent('333')
careTaker.add(editor.saveContentToMemorandum())
editor.setContent('444')
console.info(editor.getContent())
editor.getContentFromMemorandum(careTaker.get(1))
console.info(editor.getContent())
editor.getContentFromMemorandum(careTaker.get(0))
console.info(editor.getContent())
