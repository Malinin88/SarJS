//Reducers
//
//A reducer should return the new state after applying the action to the previous state

const counterReducer = (state = 0, action) => {
//function reduxCounter(state = 0, action) {

    // I've commented this because in ES6 we can specify default params in method signature ( = 0)
    //if there are not specified state - return initial state
    //if (typeof state === 'undefined') {
    //    return 0;
    //}

    switch (action.type) {
        case ('INCREMENT'):
            return state + 1;
        case ('DECREMENT'):
            return state - 1;
        default:
            return state;
    }
};

// [Novikov] todo: is it correct to export this module?
module.exports = counterReducer;