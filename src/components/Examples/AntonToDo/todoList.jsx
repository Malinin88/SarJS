import React from 'react';
import ReactDOM from 'react-dom';
import { todoStore } from './todoStore.js';
import { TodoItem } from './models/index.js';
import { AddTodoAction } from './models/actions/index.js';

let actualId = 0;

//todo: add models for actions

const TodoList = ({
    todos,
    onAddTodo,
    onItemClick
    }) => (
    <div>
        <button onClick={onAddTodo}>Add Todo</button>
        <ul>
            {todos.map(todo =>
                <li
                    style = {{
                        textDecoration: todo.isCompleted ? 'line-through' : 'none',
                        cursor: 'pointer'
                    }}
                    key={todo.id}
                    onClick={() => {
                        todoStore.dispatch({
                            type: 'TOGGLE_TODO',
                            todoId: todo.id,
                            isCompleted: !todo.isCompleted
                        })
                    }}>{todo.text}</li>
            )}
        </ul>
    </div>
);

const render = () => {
    ReactDOM.render(
        <TodoList
            onAddTodo = {() => {
                let newTodo = new TodoItem(actualId++, 'test', false);

                todoStore.dispatch(new AddTodoAction(newTodo));
                //{
                //    type: 'ADD_TODO',
                //    newTodo: new TodoItem(actualId++, 'test', false)
                //}
                //);
            }}

            todos = {todoStore.getState()}

            />,
        document.getElementById('app-examples')
    );
};

todoStore.subscribe(render);
render();
