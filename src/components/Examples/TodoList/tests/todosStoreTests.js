/**
 * Created by Novikov on 2/26/2016.
 */

import expect from 'expect';
import * as actionTypes from '../constants/actionTypes';
import configureStore from '../store/configureStore';

const store = configureStore();

describe('Todo Store', () => {
	it('Should return the initial state (getState())', () => {
		expect(
			store.getState().todos
		).toEqual([]);
	});

	it('Should ADD_TODO to the store using dispatch function', () => {
		store.dispatch({
			type: actionTypes.ADD_TODO,
			id: 0,
			text: 'Learn Redux'
		});
		expect(
			store.getState().todos
		).toEqual([
			{
				id: 0,
				text: 'Learn Redux',
				completed: false
			}
		]);
	});

	it('Should SET_VISIBILITY_FILTER using dispatch function', () => {
		store.dispatch({
			type: 'SET_VISIBILITY_FILTER',
			filter: 'SHOW_COMPLETED'
		});
		expect(
			store.getState().visibilityFilter
		).toEqual('SHOW_COMPLETED');
	});

	it('Should add another ADD_TODO to the end of the store using dispatch function', () => {
		store.dispatch({
			type: actionTypes.ADD_TODO,
			id: 1,
			text: 'Go shopping'
		});
		expect(
			store.getState().todos
		).toEqual([
			{
				id: 0,
				text: 'Learn Redux',
				completed: false
			},
			{
				id: 1,
				text: 'Go shopping',
				completed: false
			}
		]);
	});

	it('Should toggle todo item in the store using dispatch function', () => {
		store.dispatch({
			type: 'TOGGLE_TODO',
			id: 1
		});
		expect(
			store.getState().todos
		).toEqual([
			{
				id: 0,
				text: 'Learn Redux',
				completed: false
			},
			{
				id: 1,
				text: 'Go shopping',
				completed: true
			}
		]);
	});

});