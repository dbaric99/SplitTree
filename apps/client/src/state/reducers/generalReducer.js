import {createReducer} from '@reduxjs/toolkit';
import { globalActionTypes } from '../action-types';

const initialState = {
    user: null,
};

const general = createReducer(initialState, (builder) => {
    builder.addCase(globalActionTypes.SET_USER, (state, action) => {
        const {user} = state;
    });
})

export default general;