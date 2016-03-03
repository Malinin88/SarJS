/**
 * Created by Novikov on 2/26/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoListCombinedReducers from './reducers';
import TodoComponent from './components/todoComponent.jsx';

/**
 * Own implementation of the React-Redux Provider
 *
 class Provider extends Component {
    getChildContext() {
        return {
            store: this.props.store
        }
    }

    render() {
        return this.props.children;
    }
}
 Provider.childContextTypes = {
  store: React.PropTypes.object
};
 */

let store = createStore(todoListCombinedReducers);

ReactDOM.render(
    <Provider store={store}>
        <TodoComponent />
    </Provider>,
    document.getElementById('app-examples')
);