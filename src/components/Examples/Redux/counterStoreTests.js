/**
 * Created by Novikov on 2/23/2016.
 */

//Store

//A store is an object that holds the application’s state tree.
// There should only be a single store in a Redux app, as the composition happens on the reducer level.

import expect from 'expect';
import { counterStore } from './counterStore';

describe('Counter Store', () => {
    it('Should return the initial state (getState())', () => {
        expect(
            counterStore.getState()
        ).toEqual(0);
    });

    it('Should increment state using dispatch function', () => {
        counterStore.dispatch({type: 'INCREMENT'});
        expect(
            counterStore.getState()
        ).toEqual(1);
    });

    it('Should decrement state using dispatch function', () => {
        counterStore.dispatch({type: 'DECREMENT'});
        expect(
            counterStore.getState()
        ).toEqual(0);
    });

    it('Should return callback result == 1 after STORE.subscribe and STORE.decrement', () => {
        let callBackResult = 0;
        const subscribeCallback = () => {
            callBackResult += 1;
        };
        counterStore.subscribe(subscribeCallback);
        counterStore.dispatch({type: 'INCREMENT'});
        expect(callBackResult).toEqual(1);
    });

});