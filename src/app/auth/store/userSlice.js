import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    role: [], // guest
    data: {
        displayName: 'John Doe',
        photoURL: 'assets/images/avatars/Velazquez.jpg',
        email: 'johndoe@withinpixels.com',
        shortcuts: ['calendar', 'mail', 'contacts', 'todo'],
    },
};

const userSlice = createSlice({
    name: "auth/user",
    initialState,
    reducers: {
        setUser: (state, action) => action.payload,
        userLoggedOut: (state, action) => initialState,
    },
    extraReducers: {}
})

export const {setUser, userLoggedOut} = userSlice.actions;

export default userSlice.reducer;