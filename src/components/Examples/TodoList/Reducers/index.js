/**
 * Created by Novikov on 3/2/2016.
 */

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

import todosReducer from './todosReducer';
import visibilityFilterReducer from './visibilityFilterReducer';

const todoListCombinedReducers = combineReducers({
	todos: todosReducer,
	visibilityFilter: visibilityFilterReducer
});

export default todoListCombinedReducers;