/**
 * Created by Novikov on 2/26/2016.
 */

import expect from 'expect';
import { todoListStore } from './todoListStore';

describe('Counter Store', () => {
    it('Should return the initial state (getState())', () => {
        expect(
            todoListStore.getState()
        ).toEqual([]);
    });

    it('Should ADD_TODO to the store using dispatch function', () => {
        todoListStore.dispatch({
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux'
        });
        expect(
            todoListStore.getState()
        ).toEqual([
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ]);
    });

    it('Should add another ADD_TODO to the end of the store using dispatch function', () => {
        todoListStore.dispatch({
            type: 'ADD_TODO',
            id: 1,
            text: 'Go shopping'
        });
        expect(
            todoListStore.getState()
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
            todoListStore.getState()
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