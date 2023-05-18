import {createReducer} from '@reduxjs/toolkit';
import { generalActionTypes } from '../action-types';

const initialState = {
    user: {
        data: {},
        error: null
    },
};

const general = createReducer(initialState, (builder) => {
    builder
    .addCase(generalActionTypes.SET_USER, (state, action) => {
        const {user} = state;
        user.data = action.payload;
    })
    .addCase(generalActionTypes.SET_USER_FAILURE, (state, action) => {
        const {user} = state;
        user.error = action.payload;
        user.data = {};
    })
})

export default general;