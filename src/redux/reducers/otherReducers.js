import { createReducer } from "@reduxjs/toolkit";

export const otherReducers = createReducer({}, {
    contactRequest: (state) => {
        state.loading = true;
    },
    contactSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    contactFail: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },

    inviteRequest: (state) => {
        state.loading = true;
    },
    inviteSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload;
    },
    inviteFail: (state, action) => {
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