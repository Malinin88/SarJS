/**
 * Created by Novikov on 2/23/2016.
 */

// [novikov] todo: when we shoukd use impoert and when - require?
import { createStore } from 'redux';
var path = require('path');
var counterReducer = require(path.join(__dirname, 'counterReducer'));

const counterStore = createStore(counterReducer);

// The store has three important methods:
// 1. getState:
// 2. dispatch(action):
// 3. subscribe(listener):
// it lets you register a callback that the redux will call at the any time when action has been dispatched
// (registers a function to be called on state changes)
// 4. replaceReducer(nextReducer) can be used to implement hot reloading and code splitting. Most likely you won’t use it.

module.exports = counterStore;