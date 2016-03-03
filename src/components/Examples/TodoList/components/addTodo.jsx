import React from 'react';
import todoListStore from '../index';
import { addTodo } from '../actions';

const AddTodo = () => {
    let input;

    return (
        <div>
            <input ref={node => {
                    input = node;
                }}
            />
            <button onClick={() => {
                todoListStore.dispatch(addTodo(input.value))
                input.value = '';
            }}>
                Add Todo
            </button>
        </div>
    );
};

export default AddTodo;