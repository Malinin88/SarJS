/**
 * Created by Novikov on 2/26/2016.
 */

import * as actionTypes from '../constants/actionTypes';

const visibilityFilterReducer = (state = 'SHOW_ALL', action) => {
	switch (action.type) {
		case actionTypes.SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

export default visibilityFilterReducer;
