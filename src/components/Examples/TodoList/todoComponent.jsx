import React from 'react';
import ReactDOM from 'react-dom';
import { todoListStore } from './todoListStore';
import { TodoList } from './todoList.jsx';
import { FilterLink } from './filterLink.jsx'
const { Component } = React;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
    }
};

let nextTodoId = 0;
class TodoComponent extends Component {
    render() {
        const {
            todos,
            visibilityFilter
            } = this.props;
        const visibleTodos = getVisibleTodos(
            todos,
            visibilityFilter
        );
        return (
            <div>
                <input ref={node => {
                    this.input = node;
                }}
                />
                <button onClick={() => {
                    todoListStore.dispatch({
                        type: 'ADD_TODO',
                        text: this.input.value,
                        id: nextTodoId++
                    });
                    this.input.value = '';
                }}>
                    Add Todo
                </button>
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id =>
                        todoListStore.dispatch({
                            type: 'TOGGLE_TODO',
                            id
                        })
                    } />
                <p>
                    Show:
                    {' '}
                    <FilterLink
                        filter='SHOW_ALL'
                        currentFilter={visibilityFilter}
                    >
                        All
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_ACTIVE'
                        currentFilter={visibilityFilter}
                    >
                        Active
                    </FilterLink>
                    {' '}
                    <FilterLink
                        filter='SHOW_COMPLETED'
                        currentFilter={visibilityFilter}
                    >
                        Completed
                    </FilterLink>
                </p>
            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <TodoComponent
            {...todoListStore.getState()}/>,
        document.getElementById('app-examples')
    );
};
todoListStore.subscribe(render);
render();