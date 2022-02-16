const path = require("path")

module.exports = {
	entry: "./src/index.js",
	mode: "development",
	module: {},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
	},
	resolve: {
		extensions: [".js"],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "build"),
		},
		port: 8080,
		open: true,
	},
}
