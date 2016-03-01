import React from 'react';
import ReactDOM from 'react-dom';
import { counterStore } from './counterStore';

const Counter = ({
    value,
    onIncrement,
    onDecrement
    }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);

const render = () => {
    ReactDOM.render(
        <Counter
            value={counterStore.getState()}
            onIncrement={() =>
                counterStore.dispatch({
                    type: 'INCREMENT'
                })
            }
            onDecrement={() =>
                counterStore.dispatch({
                    type: 'DECREMENT'
                })
            }
        />,
        document.getElementById('app-examples')
    );
};

counterStore.subscribe(render);
render();