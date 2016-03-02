import React from 'react';
import ReactDOM from 'react-dom';
import todoListStore from './../index';
import { addTodo } from '../actions';
import { setVisibilityFilter } from '../actions';
import { toggleTodo } from '../actions';
import { AddTodo } from './addTodo.jsx';
import { TodoList } from './todoList.jsx';
import { Footer } from './footer.jsx'

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

const TodoComponent = ({
    todos,
    visibilityFilter
    }) => (
    <div>
        <AddTodo
            onAddClick={text =>
                todoListStore.dispatch(addTodo(text))
            }
        />
        <TodoList
            todos={getVisibleTodos(
                todos,
                visibilityFilter
            )}
            onTodoClick={id =>
                todoListStore.dispatch(toggleTodo(id))
            }
        />
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={filter =>
                todoListStore.dispatch(setVisibilityFilter(filter))
            }
        />
    </div>
);

const render = () => {
    ReactDOM.render(
        <TodoComponent
            {...todoListStore.getState()}/>,
        document.getElementById('app-examples')
    );
};
todoListStore.subscribe(render);
render();