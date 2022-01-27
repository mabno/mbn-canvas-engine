const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.ts',
	module: {
		rules: [
		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
			{
				loader: 'file-loader',
			},
			],
		},
		{
			test: /\.css/,
			use: [
				MiniCSSExtractPlugin.loader,
				'css-loader'
			]
		},
		{
			test: /\.tsx?$/,
			use: 'ts-loader',
			exclude: /node_modules/,
		},
		],
	},
	plugins: [
	new MiniCSSExtractPlugin(),
	new HtmlWebpackPlugin({
		template: path.resolve(__dirname, 'src/template/index.html'),
		filename: 'index.html'
	})
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
};