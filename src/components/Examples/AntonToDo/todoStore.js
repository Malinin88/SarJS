/**
 * Created by amalinin on 03/03/16.
 */
import { createStore } from 'redux';
import { todoListReducer } from './todoListReducer';

export const todoStore = createStore(todoListReducer);

