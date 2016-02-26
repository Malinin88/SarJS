/**
 * Created by Novikov on 2/26/2016.
 */

import path from 'path';
import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { todoReducer } from './todoReducer';

describe('Todo Reducer', () => {
    it('Should return the initial state', () => {
        expect(
            todoReducer(undefined, {})
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
            todoReducer(state, {type: 'SOMETHING_ELSE'})
        ).toEqual(state);
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
            todoReducer(stateBefore, action)
        ).toEqual(stateAfter);
    });
});