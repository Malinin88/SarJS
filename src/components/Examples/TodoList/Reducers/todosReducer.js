/**
 * Created by Novikov on 2/26/2016.
 */

import * as actionTypes from '../constants/actionTypes';

// Reducer composition with Arrays:
// todoItem reducer
const todoReducer = (state, action) => {
	switch (action.type) {
		case (actionTypes.ADD_TODO):
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case (actionTypes.TOGGLE_TODO):
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed
			};
		default:
			return state;
	}
};

// todoList reducer
const todosReducer = (state = [], action) => {
	switch (action.type) {
		case (actionTypes.ADD_TODO):
			return [
				...state,
				todoReducer(null, action)
			];
		case (actionTypes.TOGGLE_TODO):
			return state.map(t => todoReducer(t, action));
		default:
			return state;
	}
};

export default todosReducer;
