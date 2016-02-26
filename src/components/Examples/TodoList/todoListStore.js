/**
 * Created by Novikov on 2/26/2016.
 */

import { createStore } from 'redux';
import { todosReducer } from './todosReducer';

export const todoListStore = createStore(todosReducer);