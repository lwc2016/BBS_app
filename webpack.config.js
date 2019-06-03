const path = require("path");
const baseDir = path.resolve(__dirname, "static");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: baseDir,
		filename: "js/bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{test: /\.js$/, use: "babel-loader"},
			{test: /\.css$/, use: ["style-loader", {loader: "css-loader", options: {
					modules: true
				}}]},
			{test: /\.png/, use: "file-loader"}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	],
	devServer: {
		contentBase: baseDir,
		port: 60801,
		proxy: {
			"/login": {
				target: 'http://localhost:60801',
				pathRewrite: {'^/login' : ''},
			},
			"/register": {
				target: "http://localhost:60801",
				pathRewrite: {"^/register": ""}
			},
			"/post/1": {
				target: "http://localhost:60801",
				pathRewrite: {"^/post/1": ""}
			}
		}
	},
	mode: "development"
}