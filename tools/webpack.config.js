/**
 * Created by Novikov on 12/25/2015.
 * http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/
 * https://github.com/unicorn-standard/starter-kit/blob/master/webpack.config.js
 */

import path from 'path';
import webpack from 'webpack';
import merge from 'lodash.merge';
import AssetsPlugin from 'assets-webpack-plugin';

const DEBUG = !process.argv.includes('--release');
const VERBOSE = process.argv.includes('--verbose');
const WATCH = global.WATCH ? false : global.WATCH;
const GLOBALS = {
	'process.env.NODE_ENV': DEBUG ? '"development"' : '"production"',
	__DEV__: DEBUG
};

/**
 * Common configuration chunk to be used for both
 * client-side (app.js) and server-side (server.js) bundles
 */

const config = {
	output: {
		publicPath: '/',
		sourcePrefix: '  '
	},

	cache: DEBUG,
	debug: DEBUG,

	stats: {
		colors: true,
		reasons: DEBUG,
		hash: VERBOSE,
		version: VERBOSE,
		timings: true,
		chunks: VERBOSE,
		chunkModules: VERBOSE,
		cached: VERBOSE,
		cachedAssets: VERBOSE
	},

	plugins: [
		// Webpack can vary the distribution of the ids to get
		// the smallest id length for often used ids:
		new webpack.optimize.OccurenceOrderPlugin()
	],

	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.json']
	},

	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				include: [
					path.resolve(__dirname, '../tests'),
					path.resolve(__dirname, '../src')
				],
				loader: 'eslint-loader'
			}
		],
		loaders: [
			{
				// Only run `.js` and `.jsx` files through Babel
				test: /\.jsx?$/,
				// Skip any files outside of your project's `src` directory
				include: [
					path.resolve(__dirname, '../tests'),
					path.resolve(__dirname, '../src'),
					path.resolve(__dirname, '../node_modules/react-routing/src')
				],
				loader: 'babel-loader',
				// Options to configure babel with
				query: {
					plugins: ['transform-runtime', 'transform-decorators-legacy']
				}
			}, {
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},

	// Add heavy-weight libraries, which do not contain any 'require' directives here
	// in order not to parse them and to make the build faster
	noParse: [
		/react\/lib\/React.js/
	],

	watch: WATCH,

	watchOptions: {
		aggregateTimeout: 100
	},

	eslint: {
		configFile: path.resolve(__dirname, 'build.eslintrc'),
		failOnWarning: false,
		failOnError: true
	}
};

/**
 * Configuration for the client-side bundle (app.js)
 */

const appConfig = merge({}, config, {
	entry: {
		app: [
			// Set up an ES6-ish environment
			'babel-polyfill',
			...(WATCH ? ['webpack-hot-middleware/client'] : []),

			// Add your application's scripts below
			'./src/app.js'
		]
	},
	output: {
		path: path.resolve(__dirname, '../build/public'),
		filename: DEBUG ? '[name].js?[hash]' : '[name].[hash].js'
	},

	devtool: DEBUG ? 'cheap-module-eval-source-map' : 'source-map',

	plugins: [
		new webpack.DefinePlugin(GLOBALS),
		new AssetsPlugin({
			path: path.join(__dirname, '../build'),
			filename: 'assets.json'
		}),
		...(!DEBUG ? [
			new webpack.optimize.DedupePlugin(),
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
	]

});

// Enable React Transform in the "watch" mode
appConfig.module.loaders
	.filter(x => WATCH && x.loader === 'babel-loader')
	.forEach(x => (x.query = {
		// Wraps all React components into arbitrary transforms
		// https://github.com/gaearon/babel-plugin-react-transform
		plugins: ['react-transform'],
		extra: {
			'react-transform': {
				transforms: [
					{
						transform: 'react-transform-hmr',
						imports: ['react'],
						locals: ['module']
					}, {
						transform: 'react-transform-catch-errors',
						imports: ['react', 'redbox-react']
					}
				]
			}
		}
	}));

/**
 * Configuration for the server-side bundle (server.js)
 */

const serverConfig = merge({}, config, {
	entry: path.resolve(__dirname, '../src/server.js'),
	output: {
		path: './build',
		filename: 'server.js',
		libraryTarget: 'commonjs2'
	},
	target: 'node',
	externals: [
		/^\.\/assets\.json$/,
		function filter(context, request, cb) {
			const isExternal =
				request.match(/^[@a-z][a-z\/\.\-0-9]*$/i) && !request.match(/^react-routing/) && !context.match(/[\\/]react-routing/);
			cb(null, Boolean(isExternal));
		}
	],
	node: {
		console: false,
		global: false,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false
	},
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin(GLOBALS),
		new webpack.BannerPlugin('require("source-map-support").install();',
			{ raw: true, entryOnly: false })
	]
});

// Remove `style-loader` from the server-side bundle configuration
serverConfig.module.loaders
	.filter(x => x.loader.startsWith('style-loader/useable!'))
	.forEach(x => (x.loader = x.loader.substr(21)));

module.exports = [appConfig, serverConfig];
