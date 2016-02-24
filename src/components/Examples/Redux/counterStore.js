/**
 * Created by Novikov on 2/23/2016.
 */
import path from 'path';
import { createStore } from 'redux';
import { counterReducer } from './counterReducer';

export const counterStore = createStore(counterReducer);

// The store has three important methods:
// 1. getState:
// 2. dispatch(action):
// 3. subscribe(listener):
// it lets you register a callback that the redux will call at the any time when action has been dispatched
// (registers a function to be called on state changes)
// 4. replaceReducer(nextReducer) can be used to implement hot reloading and code splitting. Most likely you won’t use it.

/**
 * How to implement store from the scratch:
const customCreateStore = (reducer) => {
    let state;
    let listeners = [];
    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    // for initial state populated:
    dispatch({});

    return { getState, dispatch, subscribe };
};
*/