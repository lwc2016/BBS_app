const path = require("path");
const baseDir = path.resolve(__dirname, "static");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
	entry: "./src/index.js",
	output: {
		path: baseDir,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{test: /\.js$/, use: "babel-loader"},
			{test: /\.css$/, use: ["style-loader", "css-loader"]}
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
			}
		}
	},
	mode: "development"
}