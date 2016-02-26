/**
 * Created by Novikov on 2/26/2016.
 */

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ('ADD_TODO'):
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case ('TOGGLE_TODO'):{
            return state.map(todo => {
                if (todo.id !== action.id){
                    return todo;
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        }
        default:
            return state;
    }
};