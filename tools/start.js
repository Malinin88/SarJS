/**
 * Created by Novikov on 22/04/16.
 */

import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import run from './run';

global.WATCH = true;
const webpackConfig = require('./webpack.config')[0]; // Client-side bundle configuration
const bundler = webpack(webpackConfig);

/**
 * Launches a development web server with "live reload" functionality -
 * synchronizing URLs, interactions and code changes across multiple devices.
 */
async function start() {
	await run(require('./build'));
	await run(require('./serve'));

	browserSync({
		port: 3050,
		proxy: {

			target: 'localhost:5000',

			middleware: [
				webpackDevMiddleware(bundler, {
					// IMPORTANT: dev middleware can't access config, so we should
					// provide publicPath by ourselves
					publicPath: webpackConfig.output.publicPath,

					// Pretty colored output
					stats: webpackConfig.stats

					// For other settings see
					// http://webpack.github.io/docs/webpack-dev-middleware.html
				}),

				// bundler should be the same as above
				webpackHotMiddleware(bundler)
			]
		},

		// no need to watch '*.js' here, webpack will take care of it for us,
		// including full page reloads if HMR won't work
		files: [
			'build/public/**/*.css',
			'build/public/**/*.html',
			'build/content/**/*.*',
			'build/templates/**/*.*'
		]
	});
}

module.exports =  start;
