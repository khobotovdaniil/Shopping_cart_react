let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: '/dist/'
	},
	devServer: {
		static: {
			directory: path.join(__dirname, '.'),
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/'
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [ 
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
};

module.exports = (env, options) => {
	let isProd = options.mode === 'production';
	conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
	return conf;
}