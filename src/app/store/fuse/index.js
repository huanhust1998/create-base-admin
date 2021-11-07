import {combineReducers} from "@reduxjs/toolkit";
import settings from './settingsSlice';
import navigation from './navigationSlice';
import navbar from './navbarSlice';
import message from './messageSlice';
import dialog from './dialogSlice';

const fuseReducers = combineReducers({
    navigation,
    navbar,
    settings,
    message,
    dialog
});

export default fuseReducers;