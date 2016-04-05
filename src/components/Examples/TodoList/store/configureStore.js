/**
 * Created by Novikov on 3/5/2016.
 */

import { createStore } from 'redux';
import todoListCombinedReducers from '../reducers';

const configureStore = () => {
	const store = createStore(todoListCombinedReducers);
	// HotModuleReplacementPlugin
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default;
			store.replaceReducer(nextReducer);
		});
	}

	return store;
};

export default configureStore;
