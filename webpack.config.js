const path = require("path")

const buildDirectory = path.resolve(__dirname, "build")

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	output: {
		filename: "bundle.js",
		path: buildDirectory,
	},
	resolve: {
		extensions: [".js"],
	},
	devServer: {
		static: {
			directory: buildDirectory,
		},
		port: 8080,
		open: true,
	},
}
