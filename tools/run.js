/**
 * Created by Novikov on 3/31/2016.
 */

function format(time) {
	return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

//const run = async(fn, options) => {
async function run(fn, options) {
	const start = new Date();
	console.log(`[${format(start)}] Starting '${fn.name}'...`);
	await fn(options);
	const end = new Date();
	const time = end.getTime() - start.getTime();
	console.log(`[${format(end)}] Finished '${fn.name}' after ${time} ms`);
}

if (process.mainModule.children.length === 0 && process.argv.length > 2) {
	delete require.cache[__filename];
	const module = process.argv[2];
	run(require('./' + module + '.js')).catch(err => console.error(err.stack));
}

module.exports = run;
