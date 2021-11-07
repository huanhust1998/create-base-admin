import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const navigationAdapter = createEntityAdapter();
const initialState={};

const navigationSlice = createSlice({
    name: "navigation",
    initialState,
    reducers: {
        setNavigation: navigationAdapter.setAll,
        resetNavigation:(state, action)=>initialState
    }
})

export const { setNavigation, resetNavigation } = navigationSlice.actions;