/**
 * Created by Novikov on 2/26/2016.
 */

import { createStore } from 'redux';
import { combineReducers } from 'redux';

/**
 * implement CombineReducers from the scratch:
 * const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
};
 */

import { todosReducer } from './todosReducer';
import { visibilityFilterReducer } from './visibilityFilterReducer';

const todoListComponent = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});

export const todoListStore = createStore(todoListComponent);