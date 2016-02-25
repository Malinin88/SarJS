/**
 * Created by Novikov on 2/25/2016.
 */
// Redux has to avoid mutations

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const addCounterWithMutations = (list) => {
    list.push(0);
    return list;
};

const addCounterWithoutMutations = (list) => {
    //return list.concat([0]);
    // the same using ES6:
    return [...list, 0];
};

const removeCounterWithMutations = (list, index) => {
    list.splice(index, 1);
    return list;
};

const removeCounterWithoutMutations = (list, index) => {
    //return list
    //    .slice(0, index)
    //    .concat(list.slice(index +1));
    // the same using ES6
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};

const incrementCounterWithMutation = (list, index) => {
    list[index]++;
    return list;
};

const incrementCounterWithoutMutation = (list, index) => {
    //return list
    //    .slice(0, index)
    //    .concat([list[index] + 1])
    //    .concat(list.slice(index +1));
    // the same using ES6
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ];
};

describe('Array Mutations Avoidance', () => {
    it('Should ADD counter WITH array mutation', () => {
        const listBefore = [];
        const listAfter = [0];
        expect(
            addCounterWithMutations(listBefore)
        ).toEqual(listAfter);
    });

    it('Should ADD counter WITHOUT array mutation', () => {
        const listBefore = [];
        const listAfter = [0];

        deepFreeze(listBefore);

        expect(
            addCounterWithoutMutations(listBefore)
        ).toEqual(listAfter);
    });

    it('Should REMOVE counter WITH array mutation', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 20];
        expect(
            removeCounterWithMutations(listBefore, 1)
        ).toEqual(listAfter);
    });

    it('Should REMOVE counter WITHOUT array mutation', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 20];

        deepFreeze(listBefore);

        expect(
            removeCounterWithoutMutations(listBefore, 1)
        ).toEqual(listAfter);
    });

    it('Should INCREMENT counter WITH array mutation', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 11, 20];

        expect(
            incrementCounterWithMutation(listBefore, 1)
        ).toEqual(listAfter);
    });

    it('Should INCREMENT counter WITHOUT array mutation', () => {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 11, 20];

        deepFreeze(listBefore);

        expect(
            incrementCounterWithoutMutation(listBefore, 1)
        ).toEqual(listAfter);
    });
});