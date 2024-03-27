import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({}, {
    adminUsersRequest: (state) => {
        state.loading = true;
    },
    adminUsersSuccess: (state, action) => {
        state.loading = false;
        state.users = action.payload;
    },
    adminUsersFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

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