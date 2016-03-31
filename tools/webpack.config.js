/**
 * Created by Novikov on 12/25/2015.
 * http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/
 * https://github.com/unicorn-standard/starter-kit/blob/master/webpack.config.js
 */

const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const DEBUG = NODE_ENV === 'development';
//const WATCH = global.WATCH === undefined ? false : global.WATCH;
const WATCH = NODE_ENV === 'development';

module.exports = {
	entry: [
		// Set up an ES6-ish environment
		'babel-polyfill',
		...(WATCH ? ['webpack-hot-middleware/client'] : []),

		// Add your application's scripts below
		path.resolve(__dirname, '../src/app.js')
	],
	output: {
		path: path.resolve(__dirname, '../build/public'),
		filename: 'build.js'
		// [Novikov] todo: filename: DEBUG ? '[name].js?[hash]' : '[name].[hash].js',
	},

	//cache: DEBUG,
	//debug: DEBUG,

	// [Novikov] todo: uncomment it in future:
	//devtool: DEBUG ? 'cheap-module-eval-source-map' : 'source-map',
	devtool: 'source-map',

	module: {
		//preLoaders:[
		//	{
		//		test: /\.jsx?$/,
		//		include: [
		//			path.resolve(__dirname, '../tests'),
		//			path.resolve(__dirname, '../src')
		//		],
		//		loader: 'jshint-loader'
		//	}
		//
		//],
		loaders: [
			{
				// Only run `.js` and `.jsx` files through Babel
				test: /\.jsx?$/,
				// Skip any files outside of your project's `src` directory
				include: [
					path.resolve(__dirname, '../tests'),
					path.resolve(__dirname, '../src')
				],
				loader: 'babel-loader',
				// Options to configure babel with
				query: {
					plugins: ['transform-runtime']
				}
			}, {
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},

	//Add heavy-weight libraries, which do not contain any 'require' directives here
	//in order not to parse them and to make the build faster
	noParse: [
		/react\/lib\/React.js/
	],

	watch: WATCH,

	watchOptions: {
		aggregateTimeout: 100
	},

	plugins: [
		...(!DEBUG ? [
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					drop_console: true,
					unsafe: true
				}
			}),
			new webpack.optimize.AggressiveMergingPlugin()
		] : []),
		...(WATCH ? [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin()
		] : [])
	],

	/* resolveLoader: {
	 root: path.join(__dirname, "node_modules")
	 },
	 */
	resolve: {
		//root: path.join(__dirname, "node_modules"),
		//modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	}

};
