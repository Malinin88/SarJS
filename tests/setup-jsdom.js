/**
 * Created by Novikov on 3/23/2016.
 */

import jsdom from 'jsdom';

// Setup the jsdom environment
// @see https://github.com/facebook/react/issues/5046
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = global.window.navigator;