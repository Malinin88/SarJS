/**
 * Created by amalinin on 31/03/16.
 */

import webpack from 'webpack';
import webpackConfig from './webpack.config';
//const NODE_ENV = process.env.NODE_ENV || 'development';
//const WATCH = NODE_ENV === 'development';

/**
 * Bundles JavaScript, CSS and images into one or more packages
 * ready to be used in a browser.
 */
function runner() {
    console.log('start runner');
        const bundler = webpack(webpackConfig);

        function onComplete(err, stats) {
            if (err) {
                console.log(err);
            }

            console.log(stats.toString(webpackConfig[0].stats));
        }

        //if (WATCH) {
            console.log('Running watcher');
            bundler.watch(200, onComplete);
        //} else {
        //    console.log('No watcher');
        //    bundler.run(onComplete);
        //}
}

export default runner;
