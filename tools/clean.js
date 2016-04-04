/**
 * Created by Novikov on 3/31/2016.
 */

import del from 'del';
import fs from './lib/fs';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
	await del(['.tmp', 'build/*', '!build/.git'], { dot: true });
	await fs.makeDir('build/public');
}

module.exports = clean;