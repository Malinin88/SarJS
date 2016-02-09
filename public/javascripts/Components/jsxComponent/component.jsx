import React from 'react';
import ReactDOM from 'react-dom';

var Recipe = React.createClass({
    getInitialState: function () {
        /* remember, we really invoked a function and passed in args. */
        console.log(this.props);
        /* Recipe.getInitialState(): must return an object or null */
        return {
            ingredient: 'Eggplant',
            dropDownIsOpen: false
        };
    },
    handleClick: function () {
        this.setState({
            dropDownIsOpen: !this.state.dropDownIsOpen
        })
    },
    renderDropDown: function () {
        return (
            <div>
                <p>{this.props.instructions}</p>
                <p>We need {this.state.ingredient}</p>
            </div>
        );
    },
    render: function () {
        var dropDown = this.state.dropDownIsOpen ? this.renderDropDown() : null;

        return (
            <div>
                <h2
                    style={{ cursor: "pointer", color: "#009dd9" }}
                    onClick={this.handleClick}>{this.props.title}
                </h2>
                {dropDown}
            </div>
        );
    }
});

var RecipeList = React.createClass({
    render: function () {
        return (
            <div>
                <b> RecipeList component text </b>
                <Recipe
                    title="Stuffed Chard"
                    instructions="Stuff the chard..."
                />
                <Recipe
                    title="Eggplant and Polenta"
                    instructions="Put the eggplant in the oven..."
                />
            </div>
        );
    }
});

var RecipeForm = React.createClass({
    render: function () {
        return (
            <div>
                <b>RecipeForm component text</b>
            </div>
        );
    }
});

var RecipeBook = React.createClass({
    render: function () {
        return (
            <div>
                Hello, world! I am a RecipeBook
                <RecipeList/>
                <RecipeForm/>
            </div>
        );
    }
});

/* controller view calls render */
ReactDOM.render(
    <RecipeBook/>,
    /* Recipe book is just a function, attrs are args */
    document.getElementById('app-container')
);
