/**
 * Created by Novikov on 3/2/2016.
 */

import * as actionTypes from '../constants/actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => {
	return {
		type: actionTypes.ADD_TODO,
		text: text,
		id: nextTodoId++
	}
};

export const setVisibilityFilter = (filter) => {
	return {
		type: actionTypes.SET_VISIBILITY_FILTER,
		filter
	}
};

export const toggleTodo = (id) => {
	return {
		type: actionTypes.TOGGLE_TODO,
		id
	}
};
