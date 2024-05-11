const path = require('path')

module.exports = {
	devtool: "source-map",
	mode: 'production',
	entry: path.resolve(__dirname, './app/js/main.js'),
	output: {
		path: path.resolve(__dirname, 'dist/js/'),
		filename: '[name].bundle.js',
		library: 'myApp',
		// libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
}