/**
 * Created by amalinin on 11/05/16.
 */
import './component.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { searchBarStore } from './store.js';

const SearchBar = React.createClass({
    propTypes: {
        value: React.PropTypes.string,
        onChangeHandler: React.PropTypes.func
    },
    render: function () {
        return (
            <div>
                <div>{this.props.value}</div>
                <div className="b-search">
                    <input
                        type="text"
                        className="b-search__text"
                        onChange={this.props.onChangeHandler}/>
                    <button className="b-search__btn">GO!</button>
                </div>
            </div>
        );
    }
});

const renderComponent = () => {
    ReactDOM.render(
        <SearchBar
            value={searchBarStore.getState()}
            onChangeHandler={(e) =>
                searchBarStore.dispatch({
                    type: 'CHANGE_SEARCH_FILTER',
                    filterString: e.target.value
                })
            }
            />,
        document.getElementById('app-examples')
    );
};

searchBarStore.subscribe(renderComponent);
renderComponent();
