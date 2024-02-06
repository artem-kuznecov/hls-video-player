const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = env => {
	const dirNamePostfix = env.mode == 'development' ? 'dev' : 'prod'

	return {
		mode: env.mode ?? 'development',
		entry: './src/main.js',
		output: {
			filename: 'script.js',
			path: path.resolve(__dirname, `build_${dirNamePostfix}`),
			clean: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'public', 'index.html')
			}),
			new webpack.ProgressPlugin()
		],
		module: {
			rules: [
				{
					test: /\.css$/i,
					use: ['style-loader', 'css-loader']
				}
			]
		}
	}
}

module.exports = config
