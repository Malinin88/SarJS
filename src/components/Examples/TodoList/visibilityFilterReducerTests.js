/**
 * Created by Novikov on 2/26/2016.
 */

import expect from 'expect';
import deepFreeze from 'deep-freeze';
import { visibilityFilterReducer } from './visibilityFilterReducer';

describe('Visibility Filter Reducer', () => {
    it('Should return the initial state', () => {
        expect(
            visibilityFilterReducer(undefined, {})
        ).toEqual('SHOW_ALL');
    });

    it('Should return current state if type is unknown', () => {
        const state = 'SHOW_ALL';
        deepFreeze(state);
        expect(
            visibilityFilterReducer(state, {type: 'SOMETHING_ELSE'})
        ).toEqual(state);
    });

    it ('Should ADD_TODO to todo list', () =>{
        const stateBefore = [];
        const action = {
            type: 'SET_VISIBILITY_FILTER',
            filter: 'SHOW_COMPLETED'
        };
        deepFreeze(stateBefore);
        deepFreeze(action);
        expect(
            visibilityFilterReducer(stateBefore, action)
        ).toEqual('SHOW_COMPLETED');
    });

});