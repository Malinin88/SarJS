import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

let AddTodo = ({ dispatch }) => {
	let input;

	return (
		<div>
			<form onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addTodo(input.value));
                input.value = '';
			}}>
				<input ref={node => {
                    input = node;
                }}
				/>
				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>
	);
};

/**
 * AddTodo meaning:

 AddTodo = connect(
 state => { // it is wasteful to subscribe on the store here
		return {};
	},
 dispatch => {
		return {dispatch};
	}
 );
 */
AddTodo = connect()(AddTodo);

/**
 * old implementation, without using React-Redux connect
 AddTodo.contextTypes = {
    store: React.PropTypes.object
};
 */

export default AddTodo;