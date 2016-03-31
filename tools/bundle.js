/**
 * Created by amalinin on 31/03/16.
 */
import webpack from 'webpack';
import webpackConfig from './webpack.config.js'; // <-- Contains ES6+

const NODE_ENV = process.env.NODE_ENV || 'development';
const WATCH = NODE_ENV === 'development';
const bundler = webpack(webpackConfig);

if (WATCH) {
    bundler.watch(200, onComplete);
    console.log('Run webpack watcher...')
} else {
    bundler.run(onComplete);
    console.log('No webpack watcher...')
}

function onComplete(err, stats) {
    if (err) {
        console.log('Error:' + err);
    }

    console.log(stats.toString(webpackConfig.stats));
}
