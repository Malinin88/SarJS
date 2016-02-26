/**
 * Created by Novikov on 2/26/2016.
 */

export const visibilityFilterReducer = (state = 'SHOW_ALL',
                          action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};