/**
 * Created by amalinin on 11/05/16.
 */
import { createStore } from 'redux';
import { searchBarReducer } from './reducer.js';

export const searchBarStore = createStore(searchBarReducer);
