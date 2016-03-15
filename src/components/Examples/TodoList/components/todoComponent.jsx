import React from 'react';
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

export default TodoComponent;