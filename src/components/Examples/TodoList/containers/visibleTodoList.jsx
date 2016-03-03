import React from 'react';
import todoListStore from '../index';
import TodoList from '../components/todoList.jsx';
import { toggleTodo } from '../actions';
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

class VisibleTodoList extends Component {
    componentDidMount() {
        this.unsubscribe = todoListStore.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const state = todoListStore.getState();

        return (
            <TodoList
                todos={
                    getVisibleTodos(
                        state.todos,
                        state.visibilityFilter
                    )
                }
                onTodoClick={id =>
                    todoListStore.dispatch(toggleTodo(id))
                }
            />
        );
    }
}

export default VisibleTodoList;