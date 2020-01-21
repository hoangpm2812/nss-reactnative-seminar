import {INCREASE, DECREASE} from './../actions/ActionTypes'

const initialState = 0

export default CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return state + 1;

        case DECREASE:
            return state - 1;

        default:
            return state;
    }
}