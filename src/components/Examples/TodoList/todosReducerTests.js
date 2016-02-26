/**
 * Created by Novikov on 2/26/2016.
 */

import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { todosReducer } from './todosReducer';

describe('Todo Reducer', () => {
    it('Should return the initial state', () => {
        expect(
            todosReducer(undefined, {})
        ).toEqual([]);
    });

    it('Should return current state if type is unknown', () => {
        const state = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];
        deepFreeze(state);
        expect(
            todosReducer(state, {type: 'SOMETHING_ELSE'})
        ).toEqual(state);
    });

    it ('Should ADD_TODO to todo list', () =>{
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            text: 'Learn Redux',
            id: 0
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];
        deepFreeze(stateBefore);
        deepFreeze(action);
        expect(
            todosReducer(stateBefore, action)
        ).toEqual(stateAfter);
    });

    it('Should TOGGLE item in todo list', () => {
        const stateBefore = [
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
        ];
        const action = {
            type: 'TOGGLE_TODO',
            id: 1
        };
        const stateAfter = [
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
        ];
        deepFreeze(stateBefore);
        deepFreeze(action);
        expect(
            todosReducer(stateBefore, action)
        ).toEqual(stateAfter);
    });
});