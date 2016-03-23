/**
 * Created by Novikov on 3/16/2016.
 */

import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import TodoComponent from '../../components/todoComponent.jsx';
import configureStore from '../../store/configureStore';

describe('Full Todo Component behaviour tests', () => {

	before('render and locate element', function () {

		const store = configureStore();
		const renderedComponent = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoComponent />
			</Provider>);

		const addTodoInput = TestUtils.findRenderedDOMComponentWithTag (
			renderedComponent,
			'input'
		);

		this.renderedComponent = renderedComponent;
		this.addTodoInput = addTodoInput;
	});

	it('Full Todo Component should exist', function () {
		expect(this.renderedComponent).toExist();
	});

	it('Changing the value of an input field and then pressing ENTER', function () {
		let form;

		this.addTodoInput.value = 'giraffe';
		TestUtils.Simulate.change(this.addTodoInput);
		form = TestUtils.findRenderedDOMComponentWithTag(this.renderedComponent, 'form');
		TestUtils.Simulate.submit(form);

		this.addTodoInput.value = 'fox';
		TestUtils.Simulate.change(this.addTodoInput);
		form = TestUtils.findRenderedDOMComponentWithTag(this.renderedComponent, 'form');
		TestUtils.Simulate.submit(form);

		let liElements = TestUtils.scryRenderedDOMComponentsWithTag(this.renderedComponent, 'li');
		expect(liElements.length).toBe(2);

	});
});

