import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/link.jsx';

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () =>
			dispatch(setVisibilityFilter(ownProps.filter))
	};
};

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link);

/**
 * Example how to realize FilterLink without using React-Redux connect
 const { Component } = React;

 class FilterLink extends Component {
    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() =>
            this.forceUpdate()
        );
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const {store} = this.context;
        const state = store.getState();

        return (
            <Link
                active={
                    props.filter === state.visibilityFilter
                }
                onClick={() =>
                    store.dispatch(setVisibilityFilter(props.filter))
                }
            >
                {props.children}
            </Link>
        );
    }
}
 FilterLink.contextTypes = {
    store: React.PropTypes.object
};
 */

export default FilterLink;
