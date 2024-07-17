import {AnyAction, combineReducers} from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

export const combinedReducer = combineReducers({});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export default reducer;