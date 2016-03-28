import { TodoItem } from './models/index.js';

export const todoListReducer = (state = [], action = {}) => {
    let actionExecutors = {
        'ADD_TODO': () => {
            return [
                ...state,
                action.newTodo
            ];
        },
        'TOGGLE_TODO': () => {
            return state.map(todo => {
                if (todo.id !== action.todoId) {
                    return todo;
                }

                return new TodoItem(todo.id, todo.text, action.isCompleted);
            });
        }
    };

    if (!action.type || !actionExecutors[action.type]) {
        return state;
    }

    return actionExecutors[action.type]();
}
