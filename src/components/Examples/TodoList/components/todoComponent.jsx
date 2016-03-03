import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './addTodo.jsx';
import VisibleTodoList from '../containers/visibleTodoList.jsx';
import Footer from './footer.jsx'

const TodoComponent = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);


ReactDOM.render(
    <TodoComponent />,
    document.getElementById('app-examples')
);