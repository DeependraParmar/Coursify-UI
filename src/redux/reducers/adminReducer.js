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
    
    adminTransactionsRequest: (state) => {
        state.loading = true;
    },
    adminTransactionsSuccess: (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
    },
    adminTransactionsFain: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },


    adminApprovalFetchRequest: (state) => {
        state.loading = true;
    },
    adminApprovalFetchSuccess: (state, action) => {
        state.loading = false;
        state.requests = action.payload;
    },
    adminApprovalFetchFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    adminApproveRequest: (state) => {
        state.loading = true;
    },
    adminApproveSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    adminApproveFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    adminDiscardRequest: (state) => {
        state.loading = true;
    },
    adminDiscardSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    adminDiscardFail: (state, action) => {
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