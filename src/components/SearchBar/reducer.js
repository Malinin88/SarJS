/**
 * Created by amalinin on 11/05/16.
 */
export const searchBarReducer = (state = '', action = {}) => {
    switch (action.type){
        case 'CHANGE_SEARCH_FILTER':
            return action.filterString;
        default:
            return state;
    }
};