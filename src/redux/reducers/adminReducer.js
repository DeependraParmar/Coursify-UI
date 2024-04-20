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

    uploadImageRequest: (state) => {
        state.loading = true;
    },
    uploadImageSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    uploadImageFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getAllImagesRequest: (state) => {
        state.loading = true;
    },
    getAllImagesSuccess: (state, action) => {
        state.loading = false;
        state.images = action.payload;
    },
    getAllImagesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteImageRequest: (state) => {
        state.loading = true;
    },
    deleteImageSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteImageFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    addNoteRequest: (state) => {
        state.loading = true;
    },
    addNoteSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    addNoteFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    getAllNotesRequest: (state) => {
        state.loading = true;
    },
    getAllNotesSuccess: (state, action) => {
        state.loading = false;
        state.notes = action.payload;
    },
    getAllNotesFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    deleteNoteRequest: (state) => {
        state.loading = true;
    },
    deleteNoteSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    deleteNoteFail: (state, action) => {
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