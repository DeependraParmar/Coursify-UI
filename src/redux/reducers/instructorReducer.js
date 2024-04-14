import { createReducer } from "@reduxjs/toolkit";

export const instructorReducer = createReducer({}, {
    // Public profile data request reducers
    publicProfileRequest: (state) => {
        state.loading = true;
    },
    publicProfileSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
    },
    publicProfileFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getCreatedCoursesRequest: (state) => {
        state.loading = true;
    },
    getCreatedCoursesSuccess: (state, action) => {
        state.loading = false;
        state.mycourses = action.payload;
    },
    getCreatedCoursesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

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