/**
 * Created by Novikov on 2/25/2016.
 */
// Redux has to avoid mutations

import expect from 'expect';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todoObj) => {
    // ES6 method:
    /*return Object.assign({}, todoObj, {
     completed: !todoObj.completed
     });*/
    // Object preoperator, enabled in babel:
    return {
        ...todoObj,
        completed: !todoObj.completed
    };
};

describe('Object Mutations Avoidance', () => {
    it('Should change status completed WITHOUT object mutation', () => {
        const todoBefore = {
            id: 0,
            text: 'Learn Redux',
            completed: false
        };
        const todoAfter = {
            id: 0,
            text: 'Learn Redux',
            completed: true
        };

        deepFreeze(todoBefore);

        expect(
            toggleTodo(todoBefore)
        ).toEqual(todoAfter);
    });
});