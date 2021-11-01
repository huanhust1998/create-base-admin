import {combineReducers} from "@reduxjs/toolkit";

const createReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        ...asyncReducers
    })

    // Reset the redux store when user logged out

    if (action.type === "auth/user/userLoggedOut") {
        state = undefined;
    }

    return combinedReducer(state, action);

}

export default createReducer;

