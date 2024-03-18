import { createReducer } from "@reduxjs/toolkit";


export const courseReducer = createReducer({courses: []}, {
    // All Courses Reducers 


    allCoursesRequest: (state) => {
        state.loading = true;
    },
    allCoursesSuccess: (state, action) => {
        state.loading = false;
        state.courses = action.payload;
    },
    allCoursesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    
    // getting the specific course from id 

    getCourseRequest: (state) => {
        state.loading = true;
    },
    getCourseSuccess: (state, action) => {
        state.loading = false;
        state.course = action.payload;
    },
    getCourseFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    // purchased course request 

    purchasedCourseRequest: (state) => {
        state.loading = true;
    },
    purchasedCourseSuccess: (state, action) => {
        state.loading = false;
        state.course = action.payload;
    },
    purchasedCourseFail: (state, action) => {
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