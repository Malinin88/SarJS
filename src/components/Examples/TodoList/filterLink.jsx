import React from 'react';

export const FilterLink = ({
    filter,
    currentFilter,
    children
    }) => {
    if (filter === currentFilter) {
        return <span>{children}</span>
    }
    return (
        <a href="#"
           onClick={e => {
            e.preventDefault();
            todoListStore.dispatch({
                type: 'SET_VISIBILITY_FILTER',
                filter
            });
         }}>
            {children}
        </a>
    );
};