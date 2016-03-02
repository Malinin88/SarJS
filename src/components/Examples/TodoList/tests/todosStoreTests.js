/**
 * Created by Novikov on 2/26/2016.
 */

import expect from 'expect';
import todoListStore from '../index';

describe('Todo Store', () => {
    it('Should return the initial state (getState())', () => {
        expect(
            todoListStore.getState().todos
        ).toEqual([]);
    });

    it('Should ADD_TODO to the store using dispatch function', () => {
        todoListStore.dispatch({
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        });
        expect(
            todoListStore.getState().todos
        ).toEqual([
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ]);
    });

    it('Should SET_VISIBILITY_FILTER using dispatch function', () => {
        todoListStore.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        });
        expect(
            todoListStore.getState().visibilityFilter
        ).toEqual('SHOW_COMPLETED');
    });

    it('Should add another ADD_TODO to the end of the store using dispatch function', () => {
        todoListStore.dispatch({
            type: 'ADD_TODO',
            id: 1,
            text: 'Go shopping'
        });
        expect(
            todoListStore.getState().todos
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
        todoListStore.dispatch({
            type: 'TOGGLE_TODO',
            id: 1
        });
        expect(
            todoListStore.getState().todos
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