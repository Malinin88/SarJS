import React from 'react';
import ReactDOM from 'react-dom';
import { todoListStore } from './todoListStore';
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

let nextTodoId = 0;
const TodoComponent = ({
    todos,
    visibilityFilter
    }) => (
    <div>
        <AddTodo
            onAddClick={text =>
                todoListStore.dispatch({
                    type: 'ADD_TODO',
                    text: text,
                    id: nextTodoId++
                })
            }
        />
        <TodoList
            todos={getVisibleTodos(
                todos,
                visibilityFilter
            )}
            onTodoClick={id =>
                todoListStore.dispatch({
                    type: 'TOGGLE_TODO',
                    id
                })
            }/>
        <Footer
            visibilityFilter={visibilityFilter}
            onFilterClick={filter =>
                todoListStore.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter
                })
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