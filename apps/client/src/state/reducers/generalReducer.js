import {createReducer} from '@reduxjs/toolkit';
import { courseActionTypes, generalActionTypes } from '../action-types';

const initialState = {
    user: {
        data: {},
        error: null
    },
    courses: {
        data: null,
        error: null
    }
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
    .addCase(courseActionTypes.GET_COURSES_FOR_COMPANY, (state, action) => {
        const {courses} = state;
        courses.data = action.payload;
    })
    .addCase(courseActionTypes.GET_COURSES_FOR_COMPANY_FAILURE, (state, action) => {
        const {courses} = state;
        courses.error = action.payload;
        courses.data = null;
    })
})

export default general;