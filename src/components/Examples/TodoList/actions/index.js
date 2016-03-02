/**
 * Created by Novikov on 3/2/2016.
 */

let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        text: text,
        id: nextTodoId++
    }
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};
