// 安装 babel-plugin-transform-decorators-legacy 插件，并在 .babelrc plugins 加 "transform-decorators-legacy"
@testDec
class Demo {}
function testDec(target) {
	target.is = true
}
alert(Demo.is)
