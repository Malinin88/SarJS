/**
 * Created by Novikov on 2/20/2016.
 */

//Reducers
//
//A reducer should return the new state after applying the action to the previous state, and that’s the behavior tested below.

var path = require('path');
var expect = require('expect');
var counterReducer = require(path.join(__dirname, 'counterReducer'));

describe('Counter Reducer', () => {
    it ('Should return the initial state', () => {
        expect(
            counterReducer(undefined, {})
        ).toEqual(0);
    });

    it ('Should increment state', () => {
        expect(
            counterReducer(0, {type: 'INCREMENT'})
        ).toEqual(1);
    });

    it ('Should return current state if type is unknown', () => {
        expect(
            counterReducer(1, {type: 'SOMETHING_ELSE'})
        ).toEqual(1);
    });

    it ('Should decrement state', () => {
        expect(
            counterReducer(1, {type: 'DECREMENT'})
        ).toEqual(0);
    });
});