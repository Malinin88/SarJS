/**
 * Created by Novikov on 2/26/2016.
 */

import { createStore } from 'redux';
import { combineReducers } from 'redux';

import { todosReducer } from './todosReducer';
import { visibilityFilterReducer } from './visibilityFilterReducer';

const todoListComponent = combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer
});

export const todoListStore = createStore(todoListComponent);