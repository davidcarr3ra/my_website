const webpack = require("webpack")
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");

module.exports = function override(config, env) {
	// config.optimization.push({
	// 	minimizer: [
	//       new TerserPlugin(),
	//     ]
	// })

	// return config;

	// return {
	// 	...config,
	// 	optimization: {
	// 		minimizer: [
	// 	      new TerserPlugin(),
	// 	    ]
	// 	}
	// }

	// config.plugins.push(new TerserPlugin());
	// return config; --> almost works?

	config.plugins.push(new webpack.LoaderOptionsPlugin({
		minimize: true,
		options: {
           optimization: {
	           	minimizer: [
	           	new TerserPlugin(),
	           	]
           }
         }
	}))

	return config;

}