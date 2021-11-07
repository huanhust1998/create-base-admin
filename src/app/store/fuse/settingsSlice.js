import {createSlice} from "@reduxjs/toolkit";
import FuseSettingsConfig from '../../fuse-configs/settingsConfig';
import _ from 'lodash';
import {
    getParsedQuerySettings,
    defaultSettings
} from "../../../@fuse/default-settings"

function getInitialSettings() {
    const defaultLayoutStyle =
        FuseSettingsConfig.layout && FuseSettingsConfig.layout.style
            ? FuseSettingsConfig.layout.style : "layout1";
    const layout = {
        style: defaultLayoutStyle,
        config: FuseSettingsConfig[defaultLayoutStyle].defaults,
    };
    return _.merge({}, defaultLayoutStyle, {layout}, FuseSettingsConfig, getParsedQuerySettings())

}

const initialSettings = getInitialSettings();

const initialState = {}

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {}
})