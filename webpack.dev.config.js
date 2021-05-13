const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
	entry: './src/index.js',
	output: {
		path: __dirname + '/release',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, './release'),
		open: true,
		port: 9000,
		proxy: {
			// 注意是 /api 不是 api
			'/api/*': {
				target: 'http://localhost:8081'
			}
		}
	}
}
