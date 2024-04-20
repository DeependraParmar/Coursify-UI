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

    updateCourseDetailsRequest: (state) => {
        state.loading = true;
    },
    updateCourseDetailsSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    updateCourseDetailsFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    instructorSpecificCourseRequest: (state) => {
        state.loading = true;
    },
    instructorSpecificCourseSuccess: (state, action) => {
        state.loading = false;
        state.course = action.payload;
    },
    instructorSpecificCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    addLectureRequest: (state) => {
        state.loading = true;
    },
    addLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addLectureFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    

    deleteLectureRequest: (state) => {
        state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
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