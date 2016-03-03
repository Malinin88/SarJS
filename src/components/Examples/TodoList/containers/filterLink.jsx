import React from 'react';
import Link from '../components/link.jsx';
import { setVisibilityFilter } from '../actions';
import todoListStore from '../index';
const { Component } = React;

class FilterLink extends Component {
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
            <Link
                active={
                    props.filter === state.visibilityFilter
                }
                onClick={() =>
                    todoListStore.dispatch(setVisibilityFilter(props.filter))
                }
            >
                {props.children}
            </Link>
        );
    }
}

export default FilterLink;