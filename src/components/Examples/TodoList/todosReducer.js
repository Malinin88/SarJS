/**
 * Created by Novikov on 2/26/2016.
 */

// Reducer composition with Arrays:
// todoItem reducer
const todoReducer = (state, action) => {
    switch (action.type) {
        case ('ADD_TODO'):
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case ('TOGGLE_TODO'):
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
export const todosReducer = (state = [], action) => {
    switch (action.type) {
        case ('ADD_TODO'):
            return [
                ...state,
                todoReducer(undefined, action)
            ];
        case ('TOGGLE_TODO'):
        {
            return state.map(t => todoReducer(t, action));
        }
        default:
            return state;
    }
};