function* helloWorldGenerator() {
	yield 'hello'
	yield 'world'
	return 'ending'
}
// var hw = helloWorldGenerator()
// console.info(hw)
// hw.next() //{value: "hello", done: false}
// hw.next() //{value: "world", done: false}
// hw.next() //{value: "ending", done: true}
// hw.next() //{value: undefined, done: true}
// console.info(hw[Symbol.iterator])

for (var item of helloWorldGenerator()) {
	console.info(item) // hello  world
}
