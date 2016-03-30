/**
 * Created by Novikov on 3/10/2016.
 */

import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import AddTodo from '../../components/addTodo';
import configureStore from '../../store/configureStore';


describe('AddTodo Component', () => {

	before('render and locate element', function () {
		let props = {
			store: configureStore()
		};
		const renderedComponent = TestUtils.renderIntoDocument(
			<AddTodo {...props}/>
		);

		const addTodoComponent = TestUtils.findRenderedDOMComponentWithClass (
			renderedComponent,
			'add-todo'
		);

		const addTodoForm = TestUtils.findRenderedDOMComponentWithTag (
			renderedComponent,
			'form'
		);

		const addTodoInput = TestUtils.findRenderedDOMComponentWithTag (
			renderedComponent,
			'input'
		);

		const addTodoButton = TestUtils.findRenderedDOMComponentWithTag (
				renderedComponent,
				'button'
		);

		this.addTodoComponent = addTodoComponent;
		this.addTodoForm = addTodoForm;
		this.addTodoInput = addTodoInput;
		this.addTodoButton = addTodoButton;
	});

	it('AddTodo Component should exist', function () {
		expect(this.addTodoComponent).toExist();
	});

	it('Form in Component AddTodo should exist', function () {
		expect(this.addTodoForm).toExist();
	});

	it('Input in Component AddTodo should exist', function () {
		expect(this.addTodoInput).toExist();
	});

	it('Submit button in Component AddTodo should exist', function () {
		expect(this.addTodoButton).toExist();
	});
});
