import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({}, {
    adminCoursesRequest: (state) => {
        state.loading = true;
    },
    adminCoursesSuccess: (state,action) => {
        state.loading = false;
        state.course = action.payload;
    },
    adminCoursesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    }
});