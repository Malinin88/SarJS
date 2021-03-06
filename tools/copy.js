/**
 * Created by Novikov on 3/31/2016.
 */

import path from 'path';
import replace from 'replace';
import Promise from 'bluebird';
import watch from './lib/watch';

/**
 * Copies static files such as robots.txt, favicon.ico to the
 * output (build) folder.
 */
async function copy() {
	const ncp = Promise.promisify(require('ncp'));

	await Promise.all([
		ncp('src/public', 'build/public'),
		//ncp('src/content', 'build/content'),
		ncp('package.json', 'build/package.json')
	]);

	replace({
		regex: '"start".*',
		replacement: '"start": "node server.js"',
		paths: ['build/package.json'],
		recursive: false,
		silent: false,
	});

	if (global.WATCH) {
		const watcher = await watch('src/content/**/*.*');
		watcher.on('changed', async (file) => {
			const relPath = file.substr(path.join(__dirname, '../src/content/').length);
			await ncp(`src/content/${relPath}`, `build/content/${relPath}`);
		});
	}
}

module.exports = copy;
