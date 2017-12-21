const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		vendor: ['jquery']
	},
	output: {
		filename: '[name].[chunkhash].js',
		path: path.join(__dirname, '/dist'),
		library: '[name]_[chunkhash]' //当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
	},
	plugins: [
		new webpack.DllPlugin({
			path: 'manifest.json', // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
			name: '[name]_[chunkhash]',
			context: __dirname
		})
	]
}