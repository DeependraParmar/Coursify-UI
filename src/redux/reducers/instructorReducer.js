import { createReducer } from "@reduxjs/toolkit";

export const instructorReducer = createReducer({}, {
    createCourseRequest: (state) => {
        state.loading = true;
    },
    createCourseSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    createCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },



    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
});