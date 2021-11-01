import {configureStore} from '@reduxjs/toolkit';
import createReducer from "./rootReducer";


const middlewares = [];

const store = configureStore({
    reducer: createReducer(),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        }).concat(middlewares),
    devTools: process.env.NODE_ENV === "development"
})

export default store;