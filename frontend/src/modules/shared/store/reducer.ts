import {AnyAction, combineReducers} from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper';

import videoSlice from '@modules/video/store/videoSlice';

export const combinedReducer = combineReducers({
    video: videoSlice
});

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