/**
 * Created by Novikov on 2/26/2016.
 */

import { createStore } from 'redux';
import todoListComponent from './reducers'

const todoListStore = createStore(todoListComponent);

export default todoListStore;